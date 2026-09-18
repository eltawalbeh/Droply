import React from 'react';
import { Card, Badge, Button, Input } from '../../components/common/UIComponents';
import { env } from '../../config/env';
import { useLanguage } from '../../context/LanguageContext';
import { Sliders, Database, Key, HardDrive, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const PlatformSystemSettings: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-cyan-400" />
          {t.platformNav.system}
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Supabase backend status, environment keys verification, and storage bucket configuration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold text-slate-100 uppercase tracking-wider flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-400" /> Supabase Connection Status
            </h3>
            <Badge variant={env.isSupabaseConfigured ? 'success' : 'warning'}>
              {env.isSupabaseConfigured ? 'Connected' : 'Demo Placeholder Mode'}
            </Badge>
          </div>

          <div className="space-y-3 text-xs">
            <Input
              label="VITE_SUPABASE_URL"
              defaultValue={env.supabaseUrl}
              readOnly
            />
            <Input
              label="VITE_SUPABASE_ANON_KEY"
              defaultValue={env.supabaseAnonKey.slice(0, 20) + '••••••••••••••••'}
              readOnly
            />
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
            <p className="font-semibold text-slate-200">Supabase SQL Schema Ready:</p>
            <p>
              Run <code className="text-cyan-400">supabase/schema.sql</code> in your Supabase SQL Editor to provision tables, triggers, and Row Level Security (RLS) policies.
            </p>
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="text-xs font-bold text-slate-100 uppercase tracking-wider flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-cyan-400" /> Supabase Storage Buckets
          </h3>

          <div className="space-y-2 text-xs">
            {[
              { bucket: 'station-logos', desc: 'Public station branding images', access: 'Public Read / Auth Write' },
              { bucket: 'delivery-proofs', desc: 'Driver photo proof upon order completion', access: 'Private / Driver Upload' },
              { bucket: 'user-avatars', desc: 'User profile photos', access: 'Public Read / Owner Write' },
            ].map((b, idx) => (
              <div key={idx} className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold text-cyan-400">{b.bucket}</span>
                  <Badge variant="neutral">{b.access}</Badge>
                </div>
                <p className="text-slate-400 text-[11px]">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-slate-400">
            Storage bucket definitions available in <code className="text-cyan-400">supabase/storage.sql</code>
          </div>
        </Card>
      </div>
    </div>
  );
};
