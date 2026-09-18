export type UserRole = 'customer' | 'driver' | 'station_admin' | 'platform_admin';

export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  role: UserRole;
  tenantId?: string; // Station ID for Station Admins / Drivers / Customers associated with a station
  avatarUrl?: string;
  createdAt: string;
}

export interface WaterStationTenant {
  id: string;
  nameEn: string;
  nameAr: string;
  code: string;
  logoUrl?: string;
  isVerified: boolean;
  isActive: boolean;
  currency: string;
  contactPhone: string;
  addressEn?: string;
  addressAr?: string;
  createdAt: string;
}

export interface WaterProduct {
  id: string;
  tenantId: string;
  titleEn: string;
  titleAr: string;
  sizeLiters: number;
  price: number;
  imageUrl?: string;
  isAvailable: boolean;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';

export interface WaterOrder {
  id: string;
  tenantId: string;
  customerId: string;
  driverId?: string;
  status: OrderStatus;
  totalAmount: number;
  deliveryAddress: string;
  itemsCount: number;
  createdAt: string;
}
