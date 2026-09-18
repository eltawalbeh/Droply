-- =====================================================================
-- AQUAFLOW SUPABASE STORAGE BUCKETS & POLICIES SETUP
-- =====================================================================

-- 1. Create Storage Buckets
INSERT INTO storage.buckets (id, name, public)
VALUES 
    ('station-logos', 'station-logos', true),
    ('delivery-proofs', 'delivery-proofs', false),
    ('user-avatars', 'user-avatars', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Storage Policies for station-logos
CREATE POLICY "Public Read Access for Station Logos"
ON storage.objects FOR SELECT
USING (bucket_id = 'station-logos');

CREATE POLICY "Station Admin Upload for Station Logos"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'station-logos' AND
    auth.role() = 'authenticated'
);

-- 3. Storage Policies for delivery-proofs
CREATE POLICY "Driver Upload Delivery Proofs"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'delivery-proofs' AND
    auth.role() = 'authenticated'
);

CREATE POLICY "Station Admin & Driver Read Delivery Proofs"
ON storage.objects FOR SELECT
USING (
    bucket_id = 'delivery-proofs' AND
    auth.role() = 'authenticated'
);
