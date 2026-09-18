import React from 'react';
import { NavLink } from 'react-router';
import { useLanguage } from '../../context/LanguageContext';
import { Shield, Building2, Users, Sliders } from 'lucide-react';

export const PlatformAdminSidebar: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { path: '/platform-admin', label: t.platformNav.overview, icon: <Shield className="w-4 h-4" />, end: true },
    { path: '/platform-admin/stations', label: t.platformNav.stations, icon: <Building2 className="w-4 h-4" /> },
    { path: '/platform-admin/users', label: t.platformNav.users, icon: <Users className="w-4 h-4" /> },
    { path: '/platform-admin/system', label: t.platformNav.system, icon: <Sliders className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r ltr:border-r rtl:border-l border-slate-800 flex flex-col shrink-0">
      <div className="p-4 border-b border-slate-800">
        <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
          {t.roles.platform_admin}
        </h2>
      </div>

      <nav className="p-3 space-y-1 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                isActive
                  ? 'bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 bg-slate-950/40 text-xs text-slate-500">
        <p className="font-mono text-[10px] text-cyan-400">Global Admin Scope</p>
        <p className="mt-0.5">All Tenants Managed</p>
      </div>
    </aside>
  );
};
