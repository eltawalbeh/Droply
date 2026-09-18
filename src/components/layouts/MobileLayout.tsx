import React from 'react';
import { Outlet } from 'react-router';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { CustomerNav } from '../navigation/CustomerNav';
import { DriverNav } from '../navigation/DriverNav';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { RoleSwitcher } from '../common/RoleSwitcher';
import { Droplet } from 'lucide-react';

export const MobileLayout: React.FC = () => {
  const { t } = useLanguage();
  const { role } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center">
      {/* Container simulating a mobile viewport or clean centered app */}
      <div className="w-full max-w-md min-h-screen flex flex-col bg-slate-950 border-x border-slate-900 shadow-2xl relative pb-20">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
              <Droplet className="w-4 h-4 fill-current text-slate-950" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-100 tracking-tight leading-none">
                {t.appName}
              </h1>
              <p className="text-[10px] text-cyan-400 font-medium leading-none mt-0.5">
                {role === 'customer' ? t.roles.customer : t.roles.driver}
              </p>
            </div>
          </div>

          <LanguageSwitcher compact />
        </header>

        {/* Demo Role Switcher bar */}
        <div className="px-3 py-2 bg-slate-900/60 border-b border-slate-800/80">
          <RoleSwitcher />
        </div>

        {/* Main View Content */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>

        {/* Bottom Navigation */}
        {role === 'customer' ? <CustomerNav /> : <DriverNav />}
      </div>
    </div>
  );
};
