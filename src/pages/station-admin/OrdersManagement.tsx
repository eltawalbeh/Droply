import React from 'react';
import { Card, Badge, Button, Input } from '../../components/common/UIComponents';
import { useTenant } from '../../context/TenantContext';
import { useLanguage } from '../../context/LanguageContext';
import { ShoppingBag, Search, Filter, Truck, CheckCircle2 } from 'lucide-react';

export const StationOrdersManagement: React.FC = () => {
  const { activeTenant } = useTenant();
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-cyan-400" />
            {t.stationNav.orders}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Dispatch, assign drivers, and manage water orders for {activeTenant?.nameEn}.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-3.5 h-3.5" />
            {t.common.filter}
          </Button>
          <Button variant="primary" size="sm">
            + Manual Refill Order
          </Button>
        </div>
      </div>

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <Input placeholder="Search orders by ID, Customer Name, or Phone..." className="max-w-md" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left rtl:text-right text-xs">
            <thead className="bg-slate-950 text-slate-400 font-medium border-b border-slate-800 uppercase tracking-wider">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">Created At</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Delivery Address</th>
                <th className="p-3">Gallons</th>
                <th className="p-3">Total</th>
                <th className="p-3">Status</th>
                <th className="p-3">{t.common.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-200">
              <tr>
                <td className="p-3 font-mono font-bold text-cyan-400">#ord-8801</td>
                <td className="p-3 text-slate-400">11:15 AM</td>
                <td className="p-3 font-medium">Sami Al-Otaibi</td>
                <td className="p-3 text-slate-400 max-w-xs truncate">Al Malaz District, Building 14</td>
                <td className="p-3">3x 5-Gallon</td>
                <td className="p-3 font-bold text-slate-100">36.00 SAR</td>
                <td className="p-3"><Badge variant="warning">{t.orderStatus.out_for_delivery}</Badge></td>
                <td className="p-3">
                  <Button variant="outline" size="sm">Assign Driver</Button>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-cyan-400">#ord-8802</td>
                <td className="p-3 text-slate-400">11:40 AM</td>
                <td className="p-3 font-medium">Fahad Al-Dossary</td>
                <td className="p-3 text-slate-400 max-w-xs truncate">Olaya Street, Villa 8</td>
                <td className="p-3">5x 5-Gallon</td>
                <td className="p-3 font-bold text-slate-100">60.00 SAR</td>
                <td className="p-3"><Badge variant="info">{t.orderStatus.preparing}</Badge></td>
                <td className="p-3">
                  <Button variant="primary" size="sm">Dispatch Driver</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
