import React from 'react';
import { NavLink } from 'react-router';
import { useLanguage } from '../../context/LanguageContext';
import { LayoutDashboard, ShoppingBag, Package, Truck, Settings } from 'lucide-react';

export const StationAdminSidebar: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { path: '/station-admin', label: t.stationNav.overview, icon: <LayoutDashboard className="w-4 h-4" />, end: true },
    { path: '/station-admin/orders', label: t.stationNav.orders, icon: <ShoppingBag className="w-4 h-4" /> },
    { path: '/station-admin/products', label: t.stationNav.products, icon: <Package className="w-4 h-4" /> },
    { path: '/station-admin/fleet', label: t.stationNav.fleet, icon: <Truck className="w-4 h-4" /> },
    { path: '/station-admin/settings', label: t.stationNav.settings, icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r ltr:border-r rtl:border-l border-slate-800 flex flex-col shrink-0">
      <div className="p-4 border-b border-slate-800">
        <h2 className="text-sm font-semibold text-slate-200 uppercase tracking-wider text-xs">
          {t.roles.station_admin}
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
        <p className="font-mono text-[10px] text-cyan-500/80">Tenant Context: Active</p>
        <p className="mt-0.5">{t.common.multiTenantMode}</p>
      </div>
    </aside>
  );
};
