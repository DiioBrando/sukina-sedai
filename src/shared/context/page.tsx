'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import UserStore from '@/shared/lib/UserStore';

type Context = {
  store: UserStore;
};

const store = new UserStore();

const AppContext = createContext<Context>({ store });

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const { store } = useAppContext();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      store.checkAuth();
    }
  }, [store]);

  return (
    <AppContext.Provider value={{ store }}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
