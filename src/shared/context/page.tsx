'use client';
import React, { createContext, useContext } from 'react';
import UserStore from '@/shared/lib/UserStore';
import App from 'next/app';

type Context = {
  store: UserStore;
};

const store = new UserStore();

const AppContext = createContext<Context>({ store });

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={{ store }}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
