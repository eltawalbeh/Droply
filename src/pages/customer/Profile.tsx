import React from 'react';
import { Card, Badge, Button, Input } from '../../components/common/UIComponents';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { User, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export const CustomerProfile: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-bold text-slate-100 uppercase tracking-wider flex items-center gap-2">
        <User className="w-4 h-4 text-cyan-400" />
        {t.customerNav.profile}
      </h2>

      <Card className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-base">
            {user?.fullName.charAt(0) || 'C'}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-100">{user?.fullName}</h3>
            <p className="text-xs text-slate-400">{user?.email}</p>
            <Badge variant="info" className="mt-1">
              Role: Customer
            </Badge>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <Input label="Full Name" defaultValue={user?.fullName} />
          <Input label="Phone Number" defaultValue={user?.phone || '+966 50 111 0000'} />
          <Input label="Default Refill Address" defaultValue="Building 14, Al Malaz District, Riyadh" />
        </div>

        <Button variant="primary" size="sm" className="w-full">
          {t.common.save}
        </Button>
      </Card>

      <Card className="p-3 bg-slate-950/60 border-slate-800 text-xs text-slate-400 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        Multi-tenant customer profile architecture ready for Supabase Auth JWT token metadata.
      </Card>
    </div>
  );
};
