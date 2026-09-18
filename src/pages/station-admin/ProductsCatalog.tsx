import React from 'react';
import { Card, Badge, Button, Input } from '../../components/common/UIComponents';
import { useTenant } from '../../context/TenantContext';
import { useLanguage } from '../../context/LanguageContext';
import { Package, Plus, Edit2, Trash2 } from 'lucide-react';

export const StationProductsCatalog: React.FC = () => {
  const { activeTenant } = useTenant();
  const { language, t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Package className="w-5 h-5 text-cyan-400" />
            {t.stationNav.products}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Configure water product catalog, gallon sizes, and pricing for {activeTenant?.nameEn}.
          </p>
        </div>

        <Button variant="primary" size="sm">
          <Plus className="w-4 h-4" /> Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: '5-Gallon Refill Bottle (18.9L)',
            titleAr: 'قارورة مياه 5 جالون معبأة',
            size: '18.9 Liters',
            price: '12.00 SAR',
            status: 'Available',
            img: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=200&h=200&fit=crop&auto=format',
          },
          {
            title: 'New 5-Gallon Bottle + Water',
            titleAr: 'قارورة 5 جالون جديدة مع تعبئة',
            size: '18.9 Liters',
            price: '35.00 SAR',
            status: 'Available',
            img: 'https://images.unsplash.com/photo-1527100673774-cce25eafaf7f?w=200&h=200&fit=crop&auto=format',
          },
          {
            title: 'Small Bottles Pack (24 x 330ml)',
            titleAr: 'عبوات صغيرة (24 × 330 مل)',
            size: '7.9 Liters Total',
            price: '18.50 SAR',
            status: 'Low Stock',
            img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=200&fit=crop&auto=format',
          },
        ].map((prod, idx) => (
          <Card key={idx} className="space-y-3">
            <img
              src={prod.img}
              alt={prod.title}
              className="w-full h-36 rounded-xl object-cover border border-slate-800 bg-slate-800"
            />
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-slate-100">
                  {language === 'ar' ? prod.titleAr : prod.title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{prod.size}</p>
              </div>
              <Badge variant={prod.status === 'Available' ? 'success' : 'warning'}>
                {prod.status}
              </Badge>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
              <span className="text-sm font-bold text-cyan-400">{prod.price}</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
