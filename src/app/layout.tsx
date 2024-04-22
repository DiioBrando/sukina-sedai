import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { AppWrapper } from '@/shared/context/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sukina Sedai',
  description: 'Create by dmitriy, anime website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'en'}>
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
