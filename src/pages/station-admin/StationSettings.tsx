import React from 'react';
import { Card, Badge, Button, Input } from '../../components/common/UIComponents';
import { useTenant } from '../../context/TenantContext';
import { useLanguage } from '../../context/LanguageContext';
import { Settings, Upload, Image, ShieldCheck } from 'lucide-react';

export const StationSettings: React.FC = () => {
  const { activeTenant } = useTenant();
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Settings className="w-5 h-5 text-cyan-400" />
          {t.stationNav.settings}
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Water station profile, logo assets (Supabase Storage), and operating hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 space-y-4">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Station Metadata & Identity
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Station Name (English)" defaultValue={activeTenant?.nameEn} />
            <Input label="Station Name (Arabic)" defaultValue={activeTenant?.nameAr} />
            <Input label="Station Unique Code" defaultValue={activeTenant?.code} disabled />
            <Input label="Contact Phone" defaultValue={activeTenant?.contactPhone} />
          </div>

          <Input label="Address (English)" defaultValue={activeTenant?.addressEn} />
          <Input label="Address (Arabic)" defaultValue={activeTenant?.addressAr} />

          <Button variant="primary" size="sm">
            {t.common.save}
          </Button>
        </Card>

        <Card className="space-y-4">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Station Branding & Logo
          </h3>

          <div className="text-center p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
            <img
              src={activeTenant?.logoUrl}
              alt="Station Logo"
              className="w-20 h-20 rounded-2xl mx-auto object-cover border border-slate-700 bg-slate-800"
            />
            <p className="text-xs text-slate-400">
              Logo Storage Bucket: <code className="text-cyan-400">station-logos</code>
            </p>

            <label className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-xl border border-slate-700 cursor-pointer w-full justify-center">
              <Upload className="w-3.5 h-3.5 text-cyan-400" />
              Upload Logo Asset to Supabase
              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>

          <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-slate-400 space-y-1">
            <span className="font-semibold text-slate-200">Supabase Storage Policy:</span>
            <p>Public read access for station logos, authenticated upload restricted to station admin JWT claim.</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
