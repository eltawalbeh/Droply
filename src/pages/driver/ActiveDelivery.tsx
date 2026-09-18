import React, { useState } from 'react';
import { Card, Badge, Button } from '../../components/common/UIComponents';
import { useLanguage } from '../../context/LanguageContext';
import { Navigation, MapPin, Phone, CheckCircle2, Camera } from 'lucide-react';

export const DriverActiveDelivery: React.FC = () => {
  const { t } = useLanguage();
  const [delivered, setDelivered] = useState(false);

  return (
    <div className="space-y-4">
      <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl flex justify-between items-center">
        <div>
          <span className="text-[10px] font-mono text-cyan-400 font-bold">Active Navigation Route</span>
          <h2 className="text-sm font-bold text-slate-100">Order #ord-8801</h2>
        </div>
        <Badge variant="warning">{t.orderStatus.out_for_delivery}</Badge>
      </div>

      {/* Map Placeholder Simulation */}
      <Card className="h-44 bg-slate-950 border border-slate-800 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center text-center p-4">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
        <Navigation className="w-8 h-8 text-cyan-400 mb-2 animate-bounce" />
        <p className="text-xs font-bold text-slate-200">GPS Navigation Map Simulation</p>
        <p className="text-[11px] text-slate-400 mt-1">1.8 km to Al Malaz District, Building 14</p>
      </Card>

      {/* Delivery Checklist & Details */}
      <Card className="space-y-3">
        <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
          Delivery Checklist
        </h3>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-300">3x 5-Gallon Water Refill Bottles</span>
            <span className="font-bold text-cyan-400">36.0 SAR</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Customer: Sami Al-Otaibi (+966 50 111 0000)</span>
          </div>
        </div>

        {/* Proof of Delivery Upload Placeholder (Supabase Storage) */}
        <div className="p-3 border border-dashed border-slate-700 rounded-xl text-center space-y-1 bg-slate-950/40">
          <Camera className="w-5 h-5 text-slate-400 mx-auto" />
          <p className="text-xs font-medium text-slate-300">Photo Proof of Delivery</p>
          <p className="text-[10px] text-slate-500">
            Upload photo to Supabase Storage bucket <code className="text-cyan-400">delivery-proofs</code>
          </p>
        </div>

        <Button
          variant={delivered ? 'secondary' : 'primary'}
          className="w-full"
          onClick={() => setDelivered(!delivered)}
        >
          {delivered ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Order Marked as Delivered!
            </>
          ) : (
            'Mark Delivery as Completed'
          )}
        </Button>
      </Card>
    </div>
  );
};
