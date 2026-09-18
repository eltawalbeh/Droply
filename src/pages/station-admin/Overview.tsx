import React from 'react';
import { Card, Badge, Button } from '../../components/common/UIComponents';
import { useTenant } from '../../context/TenantContext';
import { useLanguage } from '../../context/LanguageContext';
import { ShoppingBag, Truck, Users, Droplet, DollarSign, TrendingUp, Clock, AlertCircle } from 'lucide-react';

export const StationOverview: React.FC = () => {
  const { activeTenant } = useTenant();
  const { language, t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Station Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-5 rounded-2xl">
        <div className="flex items-center gap-4">
          <img
            src={activeTenant?.logoUrl}
            alt={activeTenant?.nameEn}
            className="w-14 h-14 rounded-2xl object-cover border border-slate-700 bg-slate-800"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-slate-100">
                {language === 'ar' ? activeTenant?.nameAr : activeTenant?.nameEn}
              </h2>
              <Badge variant="success">Tenant ID: {activeTenant?.id}</Badge>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {language === 'ar' ? activeTenant?.addressAr : activeTenant?.addressEn}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            {t.common.refresh}
          </Button>
          <Button variant="primary" size="sm">
            Station Status: Online
          </Button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-cyan-950/30 to-slate-900 border-cyan-500/20">
          <div className="flex justify-between items-start">
            <span className="text-xs text-slate-400 font-medium">Daily Water Revenue</span>
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-100 mt-2">1,840 SAR</p>
          <p className="text-xs text-cyan-400 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3.5 h-3.5" /> +14.2% today
          </p>
        </Card>

        <Card>
          <div className="flex justify-between items-start">
            <span className="text-xs text-slate-400 font-medium">Active Refill Orders</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-100 mt-2">28 Orders</p>
          <p className="text-xs text-amber-400 mt-1">6 preparing dispatch</p>
        </Card>

        <Card>
          <div className="flex justify-between items-start">
            <span className="text-xs text-slate-400 font-medium">Active Delivery Drivers</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Truck className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-100 mt-2">5 Drivers On Route</p>
          <p className="text-xs text-emerald-400 mt-1">100% fleet active</p>
        </Card>

        <Card>
          <div className="flex justify-between items-start">
            <span className="text-xs text-slate-400 font-medium">Station Water Inventory</span>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <Droplet className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-100 mt-2">12,400 Liters</p>
          <p className="text-xs text-blue-400 mt-1">Refill tanks 85% full</p>
        </Card>
      </div>

      {/* Live Activity & Orders Table Placeholder */}
      <Card className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
              Recent Station Orders Stream
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Filtered by <code className="text-cyan-400">tenant_id = {activeTenant?.id}</code>
            </p>
          </div>
          <Button variant="outline" size="sm">
            {t.common.viewAll}
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left rtl:text-right text-xs">
            <thead className="bg-slate-950 text-slate-400 font-medium border-b border-slate-800 uppercase tracking-wider">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Gallons / Items</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Assigned Driver</th>
                <th className="p-3">{t.common.status}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200">
              <tr>
                <td className="p-3 font-mono font-bold text-cyan-400">#ord-8801</td>
                <td className="p-3 font-medium">Sami Al-Otaibi</td>
                <td className="p-3">3x 5-Gallon Bottles</td>
                <td className="p-3 font-bold text-slate-100">36.00 SAR</td>
                <td className="p-3">Khalid Al-Mansoor</td>
                <td className="p-3"><Badge variant="warning">{t.orderStatus.out_for_delivery}</Badge></td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-cyan-400">#ord-8802</td>
                <td className="p-3 font-medium">Fahad Al-Dossary</td>
                <td className="p-3">5x 5-Gallon Bottles</td>
                <td className="p-3 font-bold text-slate-100">60.00 SAR</td>
                <td className="p-3">Unassigned</td>
                <td className="p-3"><Badge variant="info">{t.orderStatus.preparing}</Badge></td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-cyan-400">#ord-8790</td>
                <td className="p-3 font-medium">Mohammed Al-Qahtani</td>
                <td className="p-3">2x 5-Gallon Bottles</td>
                <td className="p-3 font-bold text-slate-100">24.00 SAR</td>
                <td className="p-3">Khalid Al-Mansoor</td>
                <td className="p-3"><Badge variant="success">{t.orderStatus.delivered}</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
