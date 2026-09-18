import React from 'react';
import { Card, Badge, Button } from '../../components/common/UIComponents';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router';
import { Truck, MapPin, Navigation, Phone, CheckCircle2 } from 'lucide-react';

const DRIVER_ASSIGNED_ORDERS = [
  {
    id: 'ord-8801',
    customerName: 'Sami Al-Otaibi',
    customerPhone: '+966 50 111 0000',
    address: 'Building 14, Al Malaz District, Riyadh',
    items: '3x 5-Gallon Bottles',
    status: 'out_for_delivery',
    distanceKm: '1.8 km away',
  },
  {
    id: 'ord-8802',
    customerName: 'Fahad Al-Dossary',
    customerPhone: '+966 55 333 4444',
    address: 'Villa 8, Olaya Street, Riyadh',
    items: '5x 5-Gallon Bottles',
    status: 'preparing',
    distanceKm: '3.4 km away',
  },
];

export const DriverDeliveries: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl flex justify-between items-center">
        <div>
          <span className="text-[10px] font-semibold text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            Mobile Driver Interface
          </span>
          <h2 className="text-sm font-bold text-slate-100 mt-1">Assigned Deliveries Queue</h2>
        </div>
        <Badge variant="success">2 Assigned</Badge>
      </div>

      {/* Orders Queue */}
      <div className="space-y-3">
        {DRIVER_ASSIGNED_ORDERS.map((order) => (
          <Card key={order.id} className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400">#{order.id}</span>
                <h3 className="text-xs font-bold text-slate-100 mt-0.5">{order.customerName}</h3>
              </div>
              <Badge variant={order.status === 'out_for_delivery' ? 'warning' : 'info'}>
                {order.status === 'out_for_delivery' ? t.orderStatus.out_for_delivery : t.orderStatus.preparing}
              </Badge>
            </div>

            <div className="text-xs space-y-1.5 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <p className="text-slate-300 font-medium">{order.items}</p>
              <p className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                {order.address}
              </p>
              <span className="text-[11px] text-emerald-400 font-mono inline-block">
                📍 {order.distanceKm}
              </span>
            </div>

            <div className="flex gap-2">
              <a
                href={`tel:${order.customerPhone}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-xl border border-slate-700 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                Call Customer
              </a>

              <Button
                variant="primary"
                size="sm"
                className="flex-1"
                onClick={() => navigate('/driver/active')}
              >
                <Navigation className="w-3.5 h-3.5" />
                Start Route
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
