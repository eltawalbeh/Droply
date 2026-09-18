import React from 'react';
import { Card, Badge, Button, Input } from '../../components/common/UIComponents';
import { useTenant } from '../../context/TenantContext';
import { useLanguage } from '../../context/LanguageContext';
import { Building2, Plus, Search, CheckCircle2, Shield } from 'lucide-react';

export const PlatformStationsDirectory: React.FC = () => {
  const { tenants } = useTenant();
  const { language, t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-cyan-400" />
            {t.platformNav.stations}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Onboard new water stations and configure tenant keys and custom domains.
          </p>
        </div>

        <Button variant="primary" size="sm">
          <Plus className="w-4 h-4" /> Onboard Water Station
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tenants.map((st) => (
          <Card key={st.id} className="space-y-3">
            <div className="flex gap-3 items-center">
              <img
                src={st.logoUrl}
                alt={st.nameEn}
                className="w-14 h-14 rounded-2xl object-cover border border-slate-700 bg-slate-800 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-bold text-slate-100 truncate">
                    {language === 'ar' ? st.nameAr : st.nameEn}
                  </h3>
                  <Badge variant={st.isVerified ? 'success' : 'warning'}>
                    {st.isVerified ? 'Verified' : 'Unverified'}
                  </Badge>
                </div>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">Code: {st.code}</p>
                <p className="text-xs text-slate-400 mt-1 truncate">{st.addressEn}</p>
              </div>
            </div>

            <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs space-y-1 font-mono text-slate-400">
              <div className="flex justify-between">
                <span>Tenant UUID:</span>
                <span className="text-slate-200">{st.id}</span>
              </div>
              <div className="flex justify-between">
                <span>Contact Phone:</span>
                <span className="text-slate-200">{st.contactPhone}</span>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm">Manage Isolation Policy</Button>
              <Button variant="secondary" size="sm">Station Analytics</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
