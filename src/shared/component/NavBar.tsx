'use client';
import Link from 'next/link';
import { Logo } from '../../../public/icons/Logo';
import { Button } from '@/shared/component/Button';
import { ProfileImage } from '@/shared/component/ProfileImage';
import { DropDown } from '@/shared/component/DropDown';
import { useClickOutSide } from '@/shared/lib/hooks/useClickOutSide';
import React, { useState, useRef } from 'react';
import { Notification } from '../../../public/icons/Notification';
import { Browse } from '../../../public/icons/Browse';
import { InventorySvg } from '../../../public/icons/InventorySvg';
import { Inventory } from '@/shared/component/Inventory';
import { Search } from '@/shared/component/Search';
import { useAppContext } from '@/shared/context/page';
import { SignUp } from '../../../public/icons/SignUp';
import { SignIn } from '../../../public/icons/SignIn';
import { ProfileItem } from '@/shared/component/ProfileItem';

export const NavBar = () => {
  const store = useAppContext();
  const isAuth = store((state) => state.isAuth);
  const [isOpen, setOpen] = useState({
    ProfileDropDown: false,
    NotificationDropDown: false,
    fillNotification: '#000000',
    inventoryDropDown: false,
  });
  const elementRef = useRef(null);
  useClickOutSide(elementRef, () => {
    isOpen.ProfileDropDown &&
      setTimeout(() => setOpen({ ...isOpen, ProfileDropDown: false }), 100);
    isOpen.NotificationDropDown &&
      setTimeout(
        () => setOpen({ ...isOpen, NotificationDropDown: false }),
        100,
      );
    isOpen.inventoryDropDown &&
      setTimeout(() => setOpen({ ...isOpen, inventoryDropDown: false }), 100);
  });

  return (
    <header className={'flex gap-1 items-center px-1 sm:px-2'}>
      <div className={'flex items-center justify-start gap-0.5 sm:gap-2'}>
        <Link
          href={'/'}
          className={
            'hidden sm:flex scale-125 justify-start min-h-14 min-w-14 max-w-14 max-h-14 w-full h-full'
          }
        >
          <Button
            setting={{
              image: {
                svgComponent: {
                  image: <Logo />,
                  style: 'h-14 w-14 flex items-center p-0',
                },
              },
              styleButton: 'p-0 hover:bg-transparent',
            }}
          />
        </Link>
        <Link
          href={'/'}
          className={'flex items-center justify-center p-1 sm:p-0'}
        >
          <Button
            setting={{
              image: {
                svgComponent: {
                  image: <Browse />,
                  style: 'flex sm:hidden items-center',
                },
              },
              styleButton: 'p-1 sm:p-0',
            }}
          />
          <p
            className={
              'hidden sm:flex p-1 hover:bg-grayTransparent hover:rounded-lg'
            }
          >
            Browse
          </p>
        </Link>
        {isAuth ? (
          <div className={'flex items-center justify-center p-1 sm:p-0'}>
            <div className={'relative flex items-center'}>
              <Button
                setting={{
                  image: {
                    svgComponent: {
                      image: <InventorySvg />,
                      style: 'flex sm:hidden items-center w-[20px] h-[20px]',
                    },
                  },
                  styleButton: 'p-1 sm:p-0',
                  eventButton: () =>
                    setOpen({
                      ...isOpen,
                      inventoryDropDown: !isOpen.inventoryDropDown,
                    }),
                  text: {
                    value: 'Inventory',
                    style:
                      'hidden sm:flex p-1 hover:bg-grayTransparent hover:rounded-lg',
                  },
                }}
              />
              <DropDown>
                {isOpen.inventoryDropDown && (
                  <section
                    ref={elementRef}
                    className={
                      'absolute bottom-0 top-10 left-0 z-50 dark:bg-slate-900'
                    }
                  >
                    <Inventory />
                  </section>
                )}
              </DropDown>
            </div>
          </div>
        ) : null}
      </div>
      <div
        className={
          'flex justify-end sm:justify-center w-full dark:bg-slate-900'
        }
      >
        <Search />
      </div>
      {isAuth ? (
        <div
          className={'flex items-center justify-end max-w-max w-full gap-1.5'}
        >
          <div className={'relative flex items-center'}>
            <Button
              setting={{
                image: {
                  svgComponent: {
                    image: <Notification fill={isOpen.fillNotification} />,
                    style: 'w-8 h-8',
                  },
                },
                eventButton: () =>
                  setOpen({
                    ...isOpen,
                    NotificationDropDown: !isOpen.NotificationDropDown,
                  }),
              }}
            />
            {isOpen.NotificationDropDown && <DropDown>Notification</DropDown>}
          </div>
          <div className={'relative flex items-center'}>
            <Button
              setting={{
                image: {
                  svgComponent: {
                    image: <ProfileImage />,
                    style: 'min-h-10 min-w-10',
                  },
                },
                eventButton: () =>
                  setOpen({
                    ...isOpen,
                    ProfileDropDown: !isOpen.ProfileDropDown,
                  }),
                styleButton: 'p-1 h-fit',
              }}
            />
            {isOpen.ProfileDropDown && (
              <DropDown>
                <ProfileItem elementRef={elementRef} />
              </DropDown>
            )}
          </div>
        </div>
      ) : (
        <div className={'flex gap-2 px-2'}>
          <Link href={'/registration'}>
            <Button
              setting={{
                image: {
                  svgComponent: {
                    image: <SignUp />,
                    style: 'w-5 h-5 flex md:hidden',
                  },
                },
                styleButton: 'p-1 hover:bg-grayTransparent hover:rounded-lg',
                text: {
                  value: 'registration',
                  style: 'hidden md:flex',
                },
              }}
            />
          </Link>
          <Link href={'/login'}>
            <Button
              setting={{
                image: {
                  svgComponent: {
                    image: <SignIn />,
                    style: 'w-5 h-5 flex md:hidden',
                  },
                },
                styleButton:
                  'flex p-1 hover:bg-grayTransparent hover:rounded-lg',
                text: {
                  value: 'login',
                  style: 'hidden md:flex',
                },
              }}
            />
          </Link>
        </div>
      )}
    </header>
  );
};
