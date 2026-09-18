import React from 'react';
import { useTenant } from '../../context/TenantContext';
import { useLanguage } from '../../context/LanguageContext';
import { Building2 } from 'lucide-react';

export const TenantSelector: React.FC = () => {
  const { activeTenant, tenants, setActiveTenantId } = useTenant();
  const { language, t } = useLanguage();

  return (
    <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 px-2.5 py-1 rounded-lg text-xs">
      <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
      <span className="text-slate-400 text-[11px] shrink-0 hidden sm:inline">
        {t.common.activeTenant}:
      </span>
      <select
        value={activeTenant?.id || ''}
        onChange={(e) => setActiveTenantId(e.target.value)}
        className="bg-transparent text-slate-200 font-medium focus:outline-none cursor-pointer text-xs"
      >
        {tenants.map((station) => (
          <option key={station.id} value={station.id} className="bg-slate-900 text-slate-100">
            {language === 'ar' ? station.nameAr : station.nameEn} ({station.code})
          </option>
        ))}
      </select>
    </div>
  );
};
