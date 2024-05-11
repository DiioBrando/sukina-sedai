'use client';
import React, { createContext, useContext, useLayoutEffect } from 'react';
import { useStore } from '@/shared/store/UserStore';
import { useTheme } from '@/shared/lib/hooks/useTheme';

const AppContext = createContext({ useStore, useTheme });

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const { useStore, useTheme } = useAppContext();
  const auth = useStore((state) => state.checkAuth);
  useTheme();
  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      auth().then((res) => res);
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
