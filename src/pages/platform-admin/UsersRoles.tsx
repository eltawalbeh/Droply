import React from 'react';
import { Card, Badge, Button } from '../../components/common/UIComponents';
import { useLanguage } from '../../context/LanguageContext';
import { Users, Shield, UserCheck, Key } from 'lucide-react';

export const PlatformUsersRoles: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Users className="w-5 h-5 text-cyan-400" />
          {t.platformNav.users}
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          RBAC matrix (Role-Based Access Control) for Customer, Driver, Water Station Admin, and Platform Admin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { role: 'Customer', count: '920 Accounts', access: 'Mobile App, Station Catalogs, Order History', color: 'info' as const },
          { role: 'Driver', count: '140 Drivers', access: 'Mobile App, Delivery Queue, GPS Route, Photo Proof', color: 'success' as const },
          { role: 'Station Admin', count: '18 Admins', access: 'Desktop Dashboard, Orders Dispatch, Inventory, Fleet', color: 'warning' as const },
          { role: 'Platform Admin', count: '4 Superadmins', access: 'Global Dashboard, Station Onboarding, System Keys', color: 'error' as const },
        ].map((item, idx) => (
          <Card key={idx} className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-100">{item.role}</h3>
              <Badge variant={item.color}>{item.count}</Badge>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{item.access}</p>
            <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1">
              <Key className="w-3 h-3" /> Supabase RLS Role
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
