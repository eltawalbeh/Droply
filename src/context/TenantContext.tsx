import React, { createContext, useContext, useState } from 'react';
import { WaterStationTenant } from '../types';

export const MOCK_TENANTS: WaterStationTenant[] = [
  {
    id: 'station-001',
    nameEn: 'Al Safeer Water Station',
    nameAr: 'محطة السفير للمياه النقية',
    code: 'SAFEER-HQ',
    logoUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=150&h=150&fit=crop&auto=format',
    isVerified: true,
    isActive: true,
    currency: 'SAR',
    contactPhone: '+966 50 123 4567',
    addressEn: 'Riyadh Industrial Area 2, KSA',
    addressAr: 'المنطقة الصناعية الثانية، الرياض، المملكة العربية السعودية',
    createdAt: '2025-01-10T10:00:00Z',
  },
  {
    id: 'station-002',
    nameEn: 'Zamzam Crystal Springs',
    nameAr: 'محطة زمزم للينبوع الكريستالي',
    code: 'ZAMZAM-02',
    logoUrl: 'https://images.unsplash.com/photo-1527100673774-cce25eafaf7f?w=150&h=150&fit=crop&auto=format',
    isVerified: true,
    isActive: true,
    currency: 'SAR',
    contactPhone: '+966 55 987 6543',
    addressEn: 'Jeddah Coastal District, KSA',
    addressAr: 'حي الشاطئ، جدة، المملكة العربية السعودية',
    createdAt: '2025-02-01T08:30:00Z',
  },
  {
    id: 'station-003',
    nameEn: 'Oasis Pure Refill Station',
    nameAr: 'محطة الواحة لتعبئة المياه',
    code: 'OASIS-MAIN',
    logoUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=150&h=150&fit=crop&auto=format',
    isVerified: false,
    isActive: true,
    currency: 'SAR',
    contactPhone: '+966 53 111 2233',
    addressEn: 'Dammam North, KSA',
    addressAr: 'شمال الدمام، المملكة العربية السعودية',
    createdAt: '2025-02-15T14:20:00Z',
  },
];

interface TenantContextType {
  activeTenant: WaterStationTenant | null;
  activeStation: WaterStationTenant | null;
  tenants: WaterStationTenant[];
  setActiveTenantId: (tenantId: string) => void;
  isLoadingTenants: boolean;
  isLoading: boolean;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export const TenantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tenants] = useState<WaterStationTenant[]>(MOCK_TENANTS);
  const [activeTenantId, setActiveTenantIdState] = useState<string>(MOCK_TENANTS[0].id);

  const activeTenant = tenants.find((t) => t.id === activeTenantId) || tenants[0] || null;

  const setActiveTenantId = (tenantId: string) => {
    setActiveTenantIdState(tenantId);
  };

  return (
    <TenantContext.Provider
      value={{
        activeTenant,
        activeStation: activeTenant,
        tenants,
        setActiveTenantId,
        isLoadingTenants: false,
        isLoading: false,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = (): TenantContextType => {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
};
