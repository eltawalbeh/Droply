import React from 'react';
import { Card, Badge, Button } from '../../components/common/UIComponents';
import { useTenant } from '../../context/TenantContext';
import { useLanguage } from '../../context/LanguageContext';
import { Shield, Building2, Users, DollarSign, TrendingUp, Activity, Database, CheckCircle2 } from 'lucide-react';

export const GlobalOverview: React.FC = () => {
  const { tenants } = useTenant();
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            {t.roles.platform_admin} Dashboard
          </span>
          <h2 className="text-xl font-bold text-slate-100 mt-1">Multi-Tenant Water Platform Supervision</h2>
          <p className="text-xs text-slate-400 mt-1">
            Global metrics across all onboarded water stations & database health status.
          </p>
        </div>

        <Badge variant="success">System Status: Operational</Badge>
      </div>

      {/* Global KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-cyan-950/30 to-slate-900 border-cyan-500/20">
          <div className="flex justify-between items-start">
            <span className="text-xs text-slate-400 font-medium">Total Platform Volume</span>
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-100 mt-2">142,800 SAR</p>
          <p className="text-xs text-cyan-400 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3.5 h-3.5" /> Monthly GMV
          </p>
        </Card>

        <Card>
          <div className="flex justify-between items-start">
            <span className="text-xs text-slate-400 font-medium">Active Water Stations</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Building2 className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-100 mt-2">{tenants.length} Tenants</p>
          <p className="text-xs text-emerald-400 mt-1">100% verified schema</p>
        </Card>

        <Card>
          <div className="flex justify-between items-start">
            <span className="text-xs text-slate-400 font-medium">Platform Registered Users</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-100 mt-2">1,240 Users</p>
          <p className="text-xs text-amber-400 mt-1">Across 4 roles</p>
        </Card>

        <Card>
          <div className="flex justify-between items-start">
            <span className="text-xs text-slate-400 font-medium">Supabase RLS Status</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
              <Database className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-100 mt-2">Enforced</p>
          <p className="text-xs text-purple-400 mt-1">Tenant isolation active</p>
        </Card>
      </div>

      {/* Water Stations Onboarded Table */}
      <Card className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
              Onboarded Water Stations (Tenants)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Isolated multi-tenant records stored in Supabase <code className="text-cyan-400">water_stations</code> table.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left rtl:text-right text-xs">
            <thead className="bg-slate-950 text-slate-400 font-medium border-b border-slate-800 uppercase tracking-wider">
              <tr>
                <th className="p-3">Tenant ID</th>
                <th className="p-3">Station Name</th>
                <th className="p-3">Code</th>
                <th className="p-3">Location</th>
                <th className="p-3">Verification</th>
                <th className="p-3">{t.common.status}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200">
              {tenants.map((st) => (
                <tr key={st.id}>
                  <td className="p-3 font-mono font-bold text-cyan-400">{st.id}</td>
                  <td className="p-3 font-semibold">{st.nameEn} / {st.nameAr}</td>
                  <td className="p-3 font-mono text-slate-300">{st.code}</td>
                  <td className="p-3 text-slate-400">{st.addressEn}</td>
                  <td className="p-3">
                    <Badge variant={st.isVerified ? 'success' : 'warning'}>
                      {st.isVerified ? 'Verified' : 'Pending Verification'}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <Badge variant={st.isActive ? 'info' : 'neutral'}>
                      {st.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
