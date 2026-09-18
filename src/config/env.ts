/**
 * Environment configuration for Supabase integration.
 * Requires VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in production/staging.
 */
export const env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-supabase-project.supabase.co',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key',
  isSupabaseConfigured: Boolean(
    import.meta.env.VITE_SUPABASE_URL && 
    import.meta.env.VITE_SUPABASE_ANON_KEY &&
    !import.meta.env.VITE_SUPABASE_URL.includes('placeholder')
  ),
};
