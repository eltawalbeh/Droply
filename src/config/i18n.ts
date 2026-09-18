import { Language } from '../types';

export interface AppTranslation {
  appName: string;
  appTagline: string;
  roles: {
    customer: string;
    driver: string;
    station_admin: string;
    platform_admin: string;
  };
  common: {
    language: string;
    switchRole: string;
    switchStation: string;
    activeTenant: string;
    logout: string;
    login: string;
    status: string;
    actions: string;
    search: string;
    filter: string;
    refresh: string;
    settings: string;
    save: string;
    cancel: string;
    viewAll: string;
    loading: string;
    mobileAppView: string;
    desktopDashboardView: string;
    multiTenantMode: string;
    demoNotice: string;
  };
  customerNav: {
    home: string;
    orders: string;
    profile: string;
  };
  driverNav: {
    deliveries: string;
    active: string;
    earnings: string;
  };
  stationNav: {
    overview: string;
    orders: string;
    products: string;
    fleet: string;
    settings: string;
  };
  platformNav: {
    overview: string;
    stations: string;
    users: string;
    system: string;
  };
  orderStatus: {
    pending: string;
    confirmed: string;
    preparing: string;
    out_for_delivery: string;
    delivered: string;
    cancelled: string;
  };
}

export const translations: Record<Language, AppTranslation> = {
  en: {
    appName: 'AquaFlow Platform',
    appTagline: 'Multi-Tenant Water Delivery Ecosystem',
    roles: {
      customer: 'Customer',
      driver: 'Delivery Driver',
      station_admin: 'Water Station Admin',
      platform_admin: 'Platform Admin',
    },
    common: {
      language: 'Language',
      switchRole: 'Switch Demo Role',
      switchStation: 'Active Water Station',
      activeTenant: 'Active Tenant',
      logout: 'Log Out',
      login: 'Log In',
      status: 'Status',
      actions: 'Actions',
      search: 'Search...',
      filter: 'Filter',
      refresh: 'Refresh',
      settings: 'Settings',
      save: 'Save Changes',
      cancel: 'Cancel',
      viewAll: 'View All',
      loading: 'Loading...',
      mobileAppView: 'Mobile View',
      desktopDashboardView: 'Desktop Dashboard',
      multiTenantMode: 'Multi-Tenant Data Isolated',
      demoNotice: 'Clean Architecture Foundation - Connected to Supabase Schema Structure',
    },
    customerNav: {
      home: 'Stations',
      orders: 'My Orders',
      profile: 'Profile',
    },
    driverNav: {
      deliveries: 'Deliveries',
      active: 'Current Task',
      earnings: 'Earnings',
    },
    stationNav: {
      overview: 'Overview',
      orders: 'Orders Management',
      products: 'Products & Prices',
      fleet: 'Driver Fleet',
      settings: 'Station Branding',
    },
    platformNav: {
      overview: 'Global Overview',
      stations: 'Stations Directory',
      users: 'User Roles & Permissions',
      system: 'Platform Settings',
    },
    orderStatus: {
      pending: 'Pending',
      confirmed: 'Confirmed',
      preparing: 'Preparing',
      out_for_delivery: 'Out for Delivery',
      delivered: 'Delivered',
      cancelled: 'Cancelled',
    },
  },
  ar: {
    appName: 'منصة أكوا فلو',
    appTagline: 'منظومة توصيل المياه متعددة المتاجر',
    roles: {
      customer: 'العميل',
      driver: 'سائق التوصيل',
      station_admin: 'مدير محطة المياه',
      platform_admin: 'مدير المنصة',
    },
    common: {
      language: 'اللغة',
      switchRole: 'تبديل التجربة',
      switchStation: 'محطة المياه النشطة',
      activeTenant: 'المحطة الحالية',
      logout: 'تسجيل الخروج',
      login: 'تسجيل الدخول',
      status: 'الحالة',
      actions: 'الإجراءات',
      search: 'بحث...',
      filter: 'تصفية',
      refresh: 'تحديث',
      settings: 'الإعدادات',
      save: 'حفظ التغييرات',
      cancel: 'إلغاء',
      viewAll: 'عرض الكل',
      loading: 'جاري التحميل...',
      mobileAppView: 'واجهة الهاتف',
      desktopDashboardView: 'لوحة التحكم',
      multiTenantMode: 'عزل بيانات المحطات',
      demoNotice: 'الهيكل الأساسي للمشروع - جاهز للربط مع قواعد بيانات Supabase',
    },
    customerNav: {
      home: 'المحطات',
      orders: 'طلباتي',
      profile: 'حسابي',
    },
    driverNav: {
      deliveries: 'المهمات',
      active: 'الطلب الحالي',
      earnings: 'الأرباح',
    },
    stationNav: {
      overview: 'نظرة عامة',
      orders: 'إدارة الطلبات',
      products: 'المنتجات والأسعار',
      fleet: 'أسطول السائقين',
      settings: 'هوية المحطة',
    },
    platformNav: {
      overview: 'النظرة الشاملة',
      stations: 'دليل المحطات',
      users: 'الأدوار والصلاحيات',
      system: 'إعدادات المنصة',
    },
    orderStatus: {
      pending: 'قيد الانتظار',
      confirmed: 'مؤكد',
      preparing: 'قيد التحضير',
      out_for_delivery: 'جاري التوصيل',
      delivered: 'تم التسليم',
      cancelled: 'ملغي',
    },
  },
};
