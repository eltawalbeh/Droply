import React from 'react';
import { Card, Badge } from '../../components/common/UIComponents';
import { useLanguage } from '../../context/LanguageContext';
import { WaterOrder } from '../../types';
import { ShoppingBag, Clock, Truck, CheckCircle2, MapPin } from 'lucide-react';

const MOCK_ORDERS: WaterOrder[] = [
  {
    id: 'ord-8801',
    tenantId: 'station-001',
    customerId: 'usr-customer-01',
    driverId: 'usr-driver-01',
    status: 'out_for_delivery',
    totalAmount: 36.0,
    deliveryAddress: 'Building 14, Al Malaz District, Riyadh',
    itemsCount: 3,
    createdAt: '2025-02-28T11:15:00Z',
  },
  {
    id: 'ord-8790',
    tenantId: 'station-001',
    customerId: 'usr-customer-01',
    driverId: 'usr-driver-01',
    status: 'delivered',
    totalAmount: 24.0,
    deliveryAddress: 'Building 14, Al Malaz District, Riyadh',
    itemsCount: 2,
    createdAt: '2025-02-20T16:00:00Z',
  },
];

export const CustomerOrders: React.FC = () => {
  const { t } = useLanguage();

  const getStatusBadge = (status: WaterOrder['status']) => {
    switch (status) {
      case 'out_for_delivery':
        return <Badge variant="warning"><Truck className="w-3 h-3 inline mr-1" /> {t.orderStatus.out_for_delivery}</Badge>;
      case 'delivered':
        return <Badge variant="success"><CheckCircle2 className="w-3 h-3 inline mr-1" /> {t.orderStatus.delivered}</Badge>;
      case 'preparing':
        return <Badge variant="info"><Clock className="w-3 h-3 inline mr-1" /> {t.orderStatus.preparing}</Badge>;
      default:
        return <Badge variant="neutral">{t.orderStatus.pending}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-slate-100 uppercase tracking-wider flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-cyan-400" />
          {t.customerNav.orders}
        </h2>
        <span className="text-xs text-slate-400">{MOCK_ORDERS.length} Active & Past</span>
      </div>

      <div className="space-y-3">
        {MOCK_ORDERS.map((order) => (
          <Card key={order.id} className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold">#{order.id}</span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Station: {order.tenantId}
                </p>
              </div>
              {getStatusBadge(order.status)}
            </div>

            <div className="text-xs space-y-1 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-400">Gallons / Items:</span>
                <span className="font-semibold text-slate-200">{order.itemsCount} Gallons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Price:</span>
                <span className="font-bold text-cyan-400">{order.totalAmount.toFixed(2)} SAR</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
              <span className="truncate">{order.deliveryAddress}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
