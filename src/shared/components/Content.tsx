import React from 'react';
import { IChildren } from '@/entities/models/IChildren';
import { SideBar } from '@/shared/components/SideBar';
import { NavBar } from '@/shared/components/NavBar';

export const Content: React.FC<IChildren> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={'flex md:gap-2.5'}>
        <SideBar />
        {children}
      </main>
    </>
  );
};
