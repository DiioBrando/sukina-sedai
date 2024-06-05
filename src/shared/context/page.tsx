'use client';
import React, { createContext, useContext, useLayoutEffect } from 'react';
import { useUserStore } from '@/shared/stores/UserStore';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import Providers from '@/shared/context/query-provider';

const AppContext = createContext({
  useStore: useUserStore,
  useTheme,
});

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
      <Providers>{children}</Providers>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
