-- =====================================================================
-- AQUAFLOW MULTI-TENANT WATER DELIVERY PLATFORM - SUPABASE DATABASE SCHEMA
-- =====================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enum Types
CREATE TYPE user_role AS ENUM ('customer', 'driver', 'station_admin', 'platform_admin');
CREATE TYPE order_status AS ENUM ('pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled');

-- 1. WATER STATIONS (Tenants Table)
CREATE TABLE IF NOT EXISTS public.water_stations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name_en VARCHAR(255) NOT NULL,
    name_ar VARCHAR(255) NOT NULL,
    code VARCHAR(50) UNIQUE NOT NULL,
    logo_url TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    currency VARCHAR(10) DEFAULT 'SAR',
    contact_phone VARCHAR(50) NOT NULL,
    address_en TEXT,
    address_ar TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. USER PROFILES (Linked with Supabase Auth users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    role user_role NOT NULL DEFAULT 'customer',
    tenant_id UUID REFERENCES public.water_stations(id) ON DELETE SET NULL, -- Null for platform_admin
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. WATER PRODUCTS CATALOG (Multi-Tenant Isolated)
CREATE TABLE IF NOT EXISTS public.water_products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES public.water_stations(id) ON DELETE CASCADE,
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    size_liters NUMERIC(6,2) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    image_url TEXT,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. WATER ORDERS (Multi-Tenant Isolated)
CREATE TABLE IF NOT EXISTS public.water_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES public.water_stations(id) ON DELETE CASCADE,
    customer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    driver_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    status order_status NOT NULL DEFAULT 'pending',
    total_amount NUMERIC(10,2) NOT NULL,
    delivery_address TEXT NOT NULL,
    proof_image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- INDEXES FOR MULTI-TENANT QUERY PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_products_tenant ON public.water_products(tenant_id);
CREATE INDEX IF NOT EXISTS idx_orders_tenant ON public.water_orders(tenant_id);
CREATE INDEX IF NOT EXISTS idx_orders_customer ON public.water_orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_driver ON public.water_orders(driver_id);
CREATE INDEX IF NOT EXISTS idx_profiles_tenant ON public.profiles(tenant_id);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.water_stations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.water_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.water_orders ENABLE ROW LEVEL SECURITY;

-- Water Stations Policies
CREATE POLICY "Public water stations read access" ON public.water_stations
    FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Platform admins full management of water stations" ON public.water_stations
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'platform_admin'
        )
    );

-- Products Multi-Tenant Isolation Policies
CREATE POLICY "Public read available products" ON public.water_products
    FOR SELECT USING (is_available = TRUE);

CREATE POLICY "Station admins manage tenant products" ON public.water_products
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() 
            AND role = 'station_admin' 
            AND tenant_id = water_products.tenant_id
        )
    );

-- Orders Multi-Tenant Isolation Policies
CREATE POLICY "Customers view own orders" ON public.water_orders
    FOR SELECT USING (customer_id = auth.uid());

CREATE POLICY "Drivers view assigned tenant orders" ON public.water_orders
    FOR SELECT USING (
        driver_id = auth.uid() OR 
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role = 'driver' AND tenant_id = water_orders.tenant_id
        )
    );

CREATE POLICY "Station admins manage tenant orders" ON public.water_orders
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role = 'station_admin' AND tenant_id = water_orders.tenant_id
        )
    );
