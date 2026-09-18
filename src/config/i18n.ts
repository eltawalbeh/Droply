import { Language } from '../types';

export const translations = {
  en: {
    appName: 'AquaFlow Platform',
    appTagline: 'Multi-Tenant Water Delivery Ecosystem',
    // Roles
    roles: {
      customer: 'Customer',
      driver: 'Delivery Driver',
      station_admin: 'Water Station Admin',
      platform_admin: 'Platform Admin',
    },
    // Common
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
    // Customer Nav
    customerNav: {
      home: 'Stations',
      orders: 'My Orders',
      profile: 'Profile',
    },
    // Driver Nav
    driverNav: {
      deliveries: 'Deliveries',
      active: 'Current Task',
      earnings: 'Earnings',
    },
    // Station Admin Nav
    stationNav: {
      overview: 'Overview',
      orders: 'Orders Management',
      products: 'Products & Prices',
      fleet: 'Driver Fleet',
      settings: 'Station Branding',
    },
    // Platform Admin Nav
    platformNav: {
      overview: 'Global Overview',
      stations: 'Stations Directory',
      users: 'User Roles & Permissions',
      system: 'Platform Settings',
    },
    // Order Statuses
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
    // Roles
    roles: {
      customer: 'العميل',
      driver: 'سائق التوصيل',
      station_admin: 'مدير محطة المياه',
      platform_admin: 'مدير المنصة',
    },
    // Common
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
    // Customer Nav
    customerNav: {
      home: 'المحطات',
      orders: 'طلباتي',
      profile: 'حسابي',
    },
    // Driver Nav
    driverNav: {
      deliveries: 'المهمات',
      active: 'الطلب الحالي',
      earnings: 'الأرباح',
    },
    // Station Admin Nav
    stationNav: {
      overview: 'نظرة عامة',
      orders: 'إدارة الطلبات',
      products: 'المنتجات والأسعار',
      fleet: 'أسطول السائقين',
      settings: 'هوية المحطة',
    },
    // Platform Admin Nav
    platformNav: {
      overview: 'النظرة الشاملة',
      stations: 'دليل المحطات',
      users: 'الأدوار والصلاحيات',
      system: 'إعدادات المنصة',
    },
    // Order Statuses
    orderStatus: {
      pending: 'قيد الانتظار',
      confirmed: 'مؤكد',
      preparing: 'قيد التحضير',
      out_for_delivery: 'جاري التوصيل',
      delivered: 'تم التسليم',
      cancelled: 'ملغي',
    },
  },
} as const;

export type TranslationKeys = typeof translations.en;
