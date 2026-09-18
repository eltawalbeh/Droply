import React from 'react';
import { Card, Badge, Button } from '../../components/common/UIComponents';
import { useTenant } from '../../context/TenantContext';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router';
import { Droplet, MapPin, Star, ChevronRight, Search } from 'lucide-react';

export const CustomerHome: React.FC = () => {
  const { tenants } = useTenant();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 p-4 rounded-2xl border border-cyan-500/20 text-slate-100 space-y-2">
        <span className="inline-block text-[10px] font-semibold text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
          Mobile Customer View
        </span>
        <h2 className="text-base font-bold">Order Pure Water Gallons</h2>
        <p className="text-xs text-slate-300">
          Choose a nearby certified water station for fast, doorstep refill delivery.
        </p>
      </div>

      {/* Search Bar Placeholder */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-500 absolute top-3 ltr:left-3 rtl:right-3" />
        <input
          type="text"
          placeholder={t.common.search}
          className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 ltr:pl-9 ltr:pr-4 rtl:pr-9 rtl:pl-4 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
        />
      </div>

      {/* Water Stations List */}
      <div className="space-y-3">
        <div className="flex justify-between items-center px-1">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            {t.customerNav.home}
          </h3>
          <span className="text-[11px] text-cyan-400">{tenants.length} Available</span>
        </div>

        {tenants.map((station) => (
          <Card key={station.id} className="hover:border-slate-700 transition-all">
            <div className="flex gap-3 items-center">
              <img
                src={station.logoUrl}
                alt={station.nameEn}
                className="w-14 h-14 rounded-xl object-cover border border-slate-700 shrink-0 bg-slate-800"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-slate-100 truncate">
                    {language === 'ar' ? station.nameAr : station.nameEn}
                  </h4>
                  {station.isVerified && <Badge variant="success">Verified</Badge>}
                </div>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-1 truncate">
                  <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                  {language === 'ar' ? station.addressAr : station.addressEn}
                </p>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-300">
                  <span className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3 h-3 fill-current" /> 4.9
                  </span>
                  <span>• 15-30 min</span>
                  <span className="text-cyan-400 font-medium">Free Delivery</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800 flex justify-between items-center">
              <span className="text-[11px] text-slate-400 font-mono">Tenant ID: {station.id}</span>
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate(`/customer/station/${station.id}`)}
              >
                View Catalog
                <ChevronRight className="w-3.5 h-3.5 ltr:rotate-0 rtl:rotate-180" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
