import React from 'react';
import { Outlet } from 'react-router';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { StationAdminSidebar } from '../navigation/StationAdminSidebar';
import { PlatformAdminSidebar } from '../navigation/PlatformAdminSidebar';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { TenantSelector } from '../common/TenantSelector';
import { RoleSwitcher } from '../common/RoleSwitcher';
import { Droplet } from 'lucide-react';

export const DashboardLayout: React.FC = () => {
  const { t } = useLanguage();
  const { role, user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Header */}
      <header className="h-16 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
              <Droplet className="w-5 h-5 fill-current text-slate-950" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-100 tracking-tight leading-none">
                {t.appName}
              </h1>
              <p className="text-xs text-slate-400 leading-none mt-1 hidden sm:block">
                {t.appTagline}
              </p>
            </div>
          </div>

          <div className="h-6 w-px bg-slate-800 hidden md:block" />

          <div className="hidden md:block">
            {role === 'station_admin' && <TenantSelector />}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <div className="h-6 w-px bg-slate-800 hidden sm:block" />

          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-300 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">{user?.fullName || 'Admin User'}</span>
          </div>
        </div>
      </header>

      {/* Role Switcher Bar */}
      <div className="bg-slate-900/80 border-b border-slate-800 px-6 py-2 flex items-center justify-between overflow-x-auto">
        <RoleSwitcher />
        <span className="text-[11px] text-slate-400 hidden xl:inline-block font-mono">
          {t.common.demoNotice}
        </span>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        {role === 'station_admin' ? (
          <StationAdminSidebar />
        ) : (
          <PlatformAdminSidebar />
        )}

        <main className="flex-1 overflow-y-auto p-6 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
