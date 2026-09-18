import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { UserRole } from '../../types';
import { useNavigate } from 'react-router';
import { Card, Button, Input } from '../../components/common/UIComponents';
import { Shield, Smartphone, Truck, Building2, ShieldCheck, Lock } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { loginDemo, isLoading } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<UserRole>('customer');

  const rolesList: { id: UserRole; title: string; desc: string; icon: React.ReactNode; path: string }[] = [
    {
      id: 'customer',
      title: t.roles.customer,
      desc: 'Order water gallons & track delivery in real time',
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
      path: '/customer',
    },
    {
      id: 'driver',
      title: t.roles.driver,
      desc: 'View assigned deliveries & update order statuses',
      icon: <Truck className="w-5 h-5 text-emerald-400" />,
      path: '/driver',
    },
    {
      id: 'station_admin',
      title: t.roles.station_admin,
      desc: 'Manage station inventory, fleet, and order dispatches',
      icon: <Building2 className="w-5 h-5 text-amber-400" />,
      path: '/station-admin',
    },
    {
      id: 'platform_admin',
      title: t.roles.platform_admin,
      desc: 'Supervise water station onboarding & system parameters',
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
      path: '/platform-admin',
    },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginDemo(selectedRole);
    const target = rolesList.find((r) => r.id === selectedRole)?.path || '/customer';
    navigate(target);
  };

  return (
    <Card className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
          <Lock className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-100">{t.common.login}</h2>
        <p className="text-xs text-slate-400">{t.appTagline}</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300">Select Role for Demo Session:</label>
          <div className="grid grid-cols-1 gap-2">
            {rolesList.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedRole(item.id)}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                  selectedRole === item.id
                    ? 'border-cyan-500 bg-cyan-500/10 text-slate-100'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="mt-0.5">{item.icon}</div>
                <div>
                  <h4 className="text-xs font-bold">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Input label="Email Address (Optional Supabase Auth)" placeholder="user@aquaflow.com" type="email" />
        <Input label="Password" placeholder="••••••••" type="password" />

        <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
          {isLoading ? t.common.loading : `Enter Platform as ${t.roles[selectedRole]}`}
        </Button>
      </form>

      <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-400 text-center">
        <Shield className="w-3.5 h-3.5 text-cyan-400 inline mx-1" />
        Supabase Auth-ready architecture with Row Level Security (RLS) placeholders.
      </div>
    </Card>
  );
};
