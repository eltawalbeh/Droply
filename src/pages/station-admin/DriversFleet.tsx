import React from 'react';
import { Card, Badge, Button } from '../../components/common/UIComponents';
import { useTenant } from '../../context/TenantContext';
import { useLanguage } from '../../context/LanguageContext';
import { Truck, Plus, Phone, CheckCircle2, Navigation } from 'lucide-react';

export const StationDriversFleet: React.FC = () => {
  const { activeTenant } = useTenant();
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Truck className="w-5 h-5 text-cyan-400" />
            {t.stationNav.fleet}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Delivery drivers fleet associated with station <code className="text-cyan-400">{activeTenant?.code}</code>
          </p>
        </div>

        <Button variant="primary" size="sm">
          <Plus className="w-4 h-4" /> Add Driver
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            name: 'Khalid Al-Mansoor',
            phone: '+966 55 222 1111',
            status: 'On Route',
            activeOrder: '#ord-8801',
            deliveriesToday: 8,
            vehicle: 'Toyota Hilux - Pickup',
          },
          {
            name: 'Youssef Al-Zahrani',
            phone: '+966 50 444 5555',
            status: 'Available',
            activeOrder: 'None',
            deliveriesToday: 6,
            vehicle: 'Isuzu Light Truck',
          },
        ].map((driver, idx) => (
          <Card key={idx} className="space-y-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
                  {driver.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-100">{driver.name}</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-slate-500" /> {driver.phone}
                  </p>
                </div>
              </div>
              <Badge variant={driver.status === 'On Route' ? 'warning' : 'success'}>
                {driver.status}
              </Badge>
            </div>

            <div className="text-xs space-y-1.5 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <div className="flex justify-between text-slate-400">
                <span>Vehicle:</span>
                <span className="text-slate-200 font-medium">{driver.vehicle}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Active Task:</span>
                <span className="font-mono text-cyan-400 font-bold">{driver.activeOrder}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Completed Today:</span>
                <span className="text-emerald-400 font-bold">{driver.deliveriesToday} Deliveries</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
