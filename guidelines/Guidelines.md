# AquaFlow Multi-Tenant Platform Guidelines & Theme Architecture

## Project Purpose
Clean, scalable, responsive foundation for a multi-tenant water delivery ordering platform supporting Customer, Driver, Water Station Admin, and Platform Admin roles with complete Arabic/English (RTL/LTR) support and Supabase integration.

## Aesthetic Stance & Visual Craft
- **Canvas Treatment**: Dark slate canvas (`bg-slate-950`) with high-contrast text hierarchy (`text-slate-100` / `text-slate-400`).
- **Accent Tokens**: Water Cyan (`#06b6d4` / `cyan-400` / `cyan-500`) for primary interactive actions and water theme emphasis.
- **RTL / LTR**: Native document direction toggling via `document.documentElement.dir` (`ltr` | `rtl`) and Tailwind RTL-aware spacing (`ltr:rotate-0 rtl:rotate-180`, `ltr:pl-9 rtl:pr-9`).
- **Responsive Philosophy**:
  - **Mobile-First**: Customer & Driver screens wrapped in a focused mobile frame shell with fixed bottom navigation tabs.
  - **Desktop-First**: Station Admin & Platform Admin dashboards with collapsible sidebar, top navigation, data tables, and KPI metric grids.

## Role Architecture
1. **Customer** (`/customer`): Mobile-first water station catalog, product selection, order placement, and live order tracking.
2. **Driver** (`/driver`): Mobile-first assigned order queue, GPS route simulation, phone contact, and photo proof upload placeholder.
3. **Water Station Admin** (`/station-admin`): Desktop-first station management, daily revenue KPIs, order dispatching, water product catalog, driver fleet management, and station branding logo upload.
4. **Platform Admin** (`/platform-admin`): Desktop-first multi-tenant governance, global volume metrics, station onboarding directory, user roles matrix, and Supabase RLS/Storage settings.

## Backend Architecture (Supabase)
- **Multi-Tenant Isolation**: Enforced via `tenant_id` foreign keys linking products, orders, and station admins to `public.water_stations`.
- **Database Schema**: SQL script provided in `supabase/schema.sql` with tables, indexes, and Row Level Security (RLS) policies.
- **Storage Buckets**: `station-logos` (public), `delivery-proofs` (authenticated upload), and `user-avatars` (public) configured in `supabase/storage.sql`.
