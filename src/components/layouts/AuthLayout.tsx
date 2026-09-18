import React from 'react';
import { Outlet } from 'react-router';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { Droplet } from 'lucide-react';

export const AuthLayout: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-4">
      <header className="flex justify-between items-center max-w-4xl w-full mx-auto py-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
            <Droplet className="w-4 h-4 fill-current text-slate-950" />
          </div>
          <span className="font-bold text-slate-100">{t.appName}</span>
        </div>
        <LanguageSwitcher />
      </header>

      <main className="w-full max-w-md mx-auto my-auto py-8">
        <Outlet />
      </main>

      <footer className="text-center text-xs text-slate-500 py-4">
        {t.appTagline} • Multi-tenant Supabase Foundation
      </footer>
    </div>
  );
};
