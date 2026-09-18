import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LanguageProvider } from '../context/LanguageContext';
import { AuthProvider } from '../context/AuthContext';
import { TenantProvider } from '../context/TenantContext';

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <TenantProvider>
          <RouterProvider router={router} />
        </TenantProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
