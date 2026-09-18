import React from 'react';
import { NavLink } from 'react-router';
import { useLanguage } from '../../context/LanguageContext';
import { Droplet, ShoppingBag, User } from 'lucide-react';

export const CustomerNav: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { path: '/customer', label: t.customerNav.home, icon: <Droplet className="w-5 h-5" />, end: true },
    { path: '/customer/orders', label: t.customerNav.orders, icon: <ShoppingBag className="w-5 h-5" /> },
    { path: '/customer/profile', label: t.customerNav.profile, icon: <User className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-4 py-2 sm:hidden">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }: { isActive: boolean }) =>
              `flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-colors cursor-pointer ${
                isActive ? 'text-cyan-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
              }`
            }
          >
            {item.icon}
            <span className="text-[11px]">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
