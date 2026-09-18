import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Card, Badge, Button } from '../../components/common/UIComponents';
import { useTenant } from '../../context/TenantContext';
import { useLanguage } from '../../context/LanguageContext';
import { WaterProduct } from '../../types';
import { ArrowLeft, Droplet, Plus, Minus, ShoppingCart, CheckCircle2 } from 'lucide-react';

const MOCK_PRODUCTS: WaterProduct[] = [
  {
    id: 'prod-001',
    tenantId: 'station-001',
    titleEn: '5-Gallon Refill Bottle (18.9L)',
    titleAr: 'قارورة مياه 5 جالون معبأة (18.9 لتر)',
    sizeLiters: 18.9,
    price: 12.0,
    imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=300&h=300&fit=crop&auto=format',
    isAvailable: true,
  },
  {
    id: 'prod-002',
    tenantId: 'station-001',
    titleEn: 'New 5-Gallon Bottle + Water Refill',
    titleAr: 'قارورة 5 جالون جديدة مع تعبئة مياه',
    sizeLiters: 18.9,
    price: 35.0,
    imageUrl: 'https://images.unsplash.com/photo-1527100673774-cce25eafaf7f?w=300&h=300&fit=crop&auto=format',
    isAvailable: true,
  },
  {
    id: 'prod-003',
    tenantId: 'station-001',
    titleEn: 'Small Water Bottles Pack (24 x 330ml)',
    titleAr: 'كرتون عبوات صغيرة (24 × 330 مل)',
    sizeLiters: 7.9,
    price: 18.5,
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop&auto=format',
    isAvailable: true,
  },
];

export const CustomerStationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { tenants } = useTenant();
  const { language, t } = useLanguage();

  const station = tenants.find((s) => s.id === id) || tenants[0];
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleQtyChange = (prodId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[prodId] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [prodId]: next };
    });
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = MOCK_PRODUCTS.reduce((sum, prod) => sum + (quantities[prod.id] || 0) * prod.price, 0);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      navigate('/customer/orders');
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={() => navigate('/customer')}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 ltr:rotate-0 rtl:rotate-180" />
        Back to Stations
      </button>

      {/* Station Header */}
      <Card className="flex items-center gap-3">
        <img
          src={station.logoUrl}
          alt={station.nameEn}
          className="w-16 h-16 rounded-2xl object-cover border border-slate-700 bg-slate-800"
        />
        <div>
          <h2 className="text-base font-bold text-slate-100">
            {language === 'ar' ? station.nameAr : station.nameEn}
          </h2>
          <p className="text-xs text-slate-400">{station.addressEn}</p>
          <div className="mt-1 flex items-center gap-2">
            <Badge variant="info">Code: {station.code}</Badge>
            <Badge variant="success">Tenant Isolated</Badge>
          </div>
        </div>
      </Card>

      {/* Products List */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider px-1">
          Station Catalog
        </h3>

        {MOCK_PRODUCTS.map((prod) => {
          const qty = quantities[prod.id] || 0;
          return (
            <Card key={prod.id} className="flex gap-3 items-center">
              <img
                src={prod.imageUrl}
                alt={prod.titleEn}
                className="w-16 h-16 rounded-xl object-cover border border-slate-800 shrink-0 bg-slate-800"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-slate-100">
                  {language === 'ar' ? prod.titleAr : prod.titleEn}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{prod.sizeLiters} Liters</p>
                <p className="text-xs font-bold text-cyan-400 mt-1">
                  {prod.price.toFixed(2)} SAR
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl p-1 shrink-0">
                <button
                  onClick={() => handleQtyChange(prod.id, -1)}
                  className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-xs font-bold w-4 text-center">{qty}</span>
                <button
                  onClick={() => handleQtyChange(prod.id, 1)}
                  className="w-6 h-6 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 flex items-center justify-center cursor-pointer font-bold"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Checkout Bar */}
      {totalItems > 0 && (
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 sticky bottom-20 z-20 shadow-xl">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Total ({totalItems} items):</span>
            <span className="text-sm font-bold text-cyan-400">{totalPrice.toFixed(2)} SAR</span>
          </div>

          <Button
            variant="primary"
            className="w-full flex items-center justify-center gap-2"
            onClick={handlePlaceOrder}
            disabled={orderPlaced}
          >
            {orderPlaced ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
                Order Placed! Redirecting...
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Confirm Refill Delivery Order
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};
