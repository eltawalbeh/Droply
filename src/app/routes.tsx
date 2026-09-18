import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

// Layouts
import { MobileLayout } from '../components/layouts/MobileLayout';
import { DashboardLayout } from '../components/layouts/DashboardLayout';
import { AuthLayout } from '../components/layouts/AuthLayout';

// Auth Pages
import { LoginPage } from '../pages/auth/LoginPage';
import { UnauthorizedPage } from '../pages/auth/UnauthorizedPage';

// Customer Pages
import { CustomerHome } from '../pages/customer/Home';
import { CustomerStationDetail } from '../pages/customer/StationDetail';
import { CustomerOrders } from '../pages/customer/Orders';
import { CustomerProfile } from '../pages/customer/Profile';

// Driver Pages
import { DriverDeliveries } from '../pages/driver/Deliveries';
import { DriverActiveDelivery } from '../pages/driver/ActiveDelivery';
import { DriverEarnings } from '../pages/driver/Earnings';

// Station Admin Pages
import { StationOverview } from '../pages/station-admin/Overview';
import { StationOrdersManagement } from '../pages/station-admin/OrdersManagement';
import { StationProductsCatalog } from '../pages/station-admin/ProductsCatalog';
import { StationDriversFleet } from '../pages/station-admin/DriversFleet';
import { StationSettings } from '../pages/station-admin/StationSettings';

// Platform Admin Pages
import { GlobalOverview } from '../pages/platform-admin/GlobalOverview';
import { PlatformStationsDirectory } from '../pages/platform-admin/StationsDirectory';
import { PlatformUsersRoles } from '../pages/platform-admin/UsersRoles';
import { PlatformSystemSettings } from '../pages/platform-admin/SystemSettings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/customer" replace />,
  },
  // Auth routes
  {
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'unauthorized', element: <UnauthorizedPage /> },
    ],
  },
  // Customer Routes (Mobile-first)
  {
    path: 'customer',
    element: <MobileLayout />,
    children: [
      { index: true, element: <CustomerHome /> },
      { path: 'station/:id', element: <CustomerStationDetail /> },
      { path: 'orders', element: <CustomerOrders /> },
      { path: 'profile', element: <CustomerProfile /> },
    ],
  },
  // Driver Routes (Mobile-first)
  {
    path: 'driver',
    element: <MobileLayout />,
    children: [
      { index: true, element: <DriverDeliveries /> },
      { path: 'active', element: <DriverActiveDelivery /> },
      { path: 'earnings', element: <DriverEarnings /> },
    ],
  },
  // Station Admin Routes (Desktop-first Dashboard)
  {
    path: 'station-admin',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <StationOverview /> },
      { path: 'orders', element: <StationOrdersManagement /> },
      { path: 'products', element: <StationProductsCatalog /> },
      { path: 'fleet', element: <StationDriversFleet /> },
      { path: 'settings', element: <StationSettings /> },
    ],
  },
  // Platform Admin Routes (Desktop-first Dashboard)
  {
    path: 'platform-admin',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <GlobalOverview /> },
      { path: 'stations', element: <PlatformStationsDirectory /> },
      { path: 'users', element: <PlatformUsersRoles /> },
      { path: 'system', element: <PlatformSystemSettings /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/customer" replace />,
  },
]);
