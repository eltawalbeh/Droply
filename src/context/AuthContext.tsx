import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserRole } from '../types';
import { supabase } from '../lib/supabase';
import { env } from '../config/env';

interface AuthContextType {
  user: UserProfile | null;
  role: UserRole;
  isAuthenticated: boolean;
  isLoading: boolean;
  setRole: (role: UserRole) => void;
  loginDemo: (role: UserRole) => void;
  logout: () => Promise<void>;
}

const DEFAULT_PROFILES: Record<UserRole, UserProfile> = {
  customer: {
    id: 'usr-customer-01',
    email: 'customer@aquaflow.demo',
    fullName: 'Sami Al-Otaibi',
    phone: '+966 50 111 0000',
    role: 'customer',
    tenantId: 'station-001',
    createdAt: '2025-01-01',
  },
  driver: {
    id: 'usr-driver-01',
    email: 'driver.khalid@aquaflow.demo',
    fullName: 'Khalid Al-Mansoor',
    phone: '+966 55 222 1111',
    role: 'driver',
    tenantId: 'station-001',
    createdAt: '2025-01-05',
  },
  station_admin: {
    id: 'usr-station-admin-01',
    email: 'admin@safeerwater.demo',
    fullName: 'Tariq Al-Harbi',
    phone: '+966 54 333 2222',
    role: 'station_admin',
    tenantId: 'station-001',
    createdAt: '2025-01-10',
  },
  platform_admin: {
    id: 'usr-platform-admin-01',
    email: 'superadmin@aquaflow.demo',
    fullName: 'Noura Al-Ghamdi',
    phone: '+966 50 999 8888',
    role: 'platform_admin',
    createdAt: '2025-01-01',
  },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<UserRole>('customer');
  const [user, setUser] = useState<UserProfile | null>(DEFAULT_PROFILES['customer']);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (env.isSupabaseConfigured) {
      // Check active Supabase session
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          // If live session exists, extract role from user_metadata or fallback
          const userRole = (session.user.user_metadata?.role as UserRole) || 'customer';
          setRoleState(userRole);
          setUser({
            id: session.user.id,
            email: session.user.email || '',
            fullName: session.user.user_metadata?.full_name || 'Authenticated User',
            role: userRole,
            tenantId: session.user.user_metadata?.tenant_id,
            createdAt: session.user.created_at,
          });
        }
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          const userRole = (session.user.user_metadata?.role as UserRole) || 'customer';
          setRoleState(userRole);
          setUser({
            id: session.user.id,
            email: session.user.email || '',
            fullName: session.user.user_metadata?.full_name || 'Authenticated User',
            role: userRole,
            tenantId: session.user.user_metadata?.tenant_id,
            createdAt: session.user.created_at,
          });
        }
      });

      return () => subscription.unsubscribe();
    }
  }, []);

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    setUser(DEFAULT_PROFILES[newRole]);
  };

  const loginDemo = (selectedRole: UserRole) => {
    setIsLoading(true);
    setTimeout(() => {
      setRoleState(selectedRole);
      setUser(DEFAULT_PROFILES[selectedRole]);
      setIsLoading(false);
    }, 300);
  };

  const logout = async () => {
    if (env.isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated: !!user,
        isLoading,
        setRole,
        loginDemo,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
