'use client';
import React, {
  createContext,
  Suspense,
  useContext,
  useLayoutEffect,
} from 'react';
import { useStore } from '@/shared/store/UserStore';
import { useTheme } from '@/shared/lib/hooks/useTheme';

const AppContext = createContext({ useStore, useTheme });

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const { useStore, useTheme } = useAppContext();
  const auth = useStore((state) => state.checkAuth);
  useTheme();
  useLayoutEffect(() => {
    if (localStorage.getItem('token')) {
      auth();
    }
  }, [auth]);

  return (
    <AppContext.Provider value={{ useStore, useTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
