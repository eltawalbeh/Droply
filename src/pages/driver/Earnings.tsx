import React from 'react';
import { Card, Badge } from '../../components/common/UIComponents';
import { DollarSign, Truck, CheckCircle2, TrendingUp } from 'lucide-react';

export const DriverEarnings: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-bold text-slate-100 uppercase tracking-wider flex items-center gap-2">
        <DollarSign className="w-4 h-4 text-emerald-400" />
        Driver Earnings & Stats
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-gradient-to-br from-emerald-950/40 to-slate-900 border-emerald-500/20">
          <p className="text-[11px] text-slate-400 font-medium">Today's Earnings</p>
          <p className="text-xl font-bold text-emerald-400 mt-1">145.00 SAR</p>
          <p className="text-[10px] text-emerald-500 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> +12% vs yesterday
          </p>
        </Card>

        <Card className="bg-slate-900">
          <p className="text-[11px] text-slate-400 font-medium">Completed Deliveries</p>
          <p className="text-xl font-bold text-slate-100 mt-1">8 Orders</p>
          <p className="text-[10px] text-slate-400 mt-1">Avg 18 min / delivery</p>
        </Card>
      </div>

      <Card className="space-y-3">
        <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
          Completed Today
        </h3>

        <div className="space-y-2 text-xs">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex justify-between items-center p-2.5 rounded-xl bg-slate-950 border border-slate-800"
            >
              <div>
                <span className="font-mono font-bold text-cyan-400">#ord-879{i}</span>
                <p className="text-[11px] text-slate-400 mt-0.5">3 Gallons • Al Malaz District</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-emerald-400">+18.0 SAR</span>
                <p className="text-[10px] text-slate-500">Delivered 14:{20 - i * 15}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
