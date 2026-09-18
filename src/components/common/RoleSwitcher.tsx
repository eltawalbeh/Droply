import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { UserRole } from '../../types';
import { useNavigate } from 'react-router';
import { UserCheck, Smartphone, Truck, Building2, ShieldCheck } from 'lucide-react';

export const RoleSwitcher: React.FC = () => {
  const { role, setRole } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const roleConfigs: { id: UserRole; label: string; icon: React.ReactNode; path: string; badge: string }[] = [
    { id: 'customer', label: t.roles.customer, icon: <Smartphone className="w-3.5 h-3.5" />, path: '/customer', badge: t.common.mobileAppView },
    { id: 'driver', label: t.roles.driver, icon: <Truck className="w-3.5 h-3.5" />, path: '/driver', badge: t.common.mobileAppView },
    { id: 'station_admin', label: t.roles.station_admin, icon: <Building2 className="w-3.5 h-3.5" />, path: '/station-admin', badge: t.common.desktopDashboardView },
    { id: 'platform_admin', label: t.roles.platform_admin, icon: <ShieldCheck className="w-3.5 h-3.5" />, path: '/platform-admin', badge: t.common.desktopDashboardView },
  ];

  const handleRoleChange = (newRole: UserRole, targetPath: string) => {
    setRole(newRole);
    navigate(targetPath);
  };

  return (
    <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 p-1 rounded-xl overflow-x-auto max-w-full">
      <span className="text-[11px] font-medium text-slate-400 px-2 flex items-center gap-1 shrink-0">
        <UserCheck className="w-3 h-3 text-cyan-400" />
        {t.common.switchRole}:
      </span>
      <div className="flex items-center gap-1 shrink-0">
        {roleConfigs.map((item) => {
          const isActive = role === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleRoleChange(item.id, item.path)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
