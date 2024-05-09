'use client';
import React, { createContext, useContext, useLayoutEffect } from 'react';
import { useStore } from '@/shared/lib/UserStore';

const AppContext = createContext(useStore);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const useStore = useAppContext();
  const auth = useStore((state) => state.checkAuth);

  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      auth().then((res) => res);
    }
  }, [auth]);

  return <AppContext.Provider value={useStore}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
