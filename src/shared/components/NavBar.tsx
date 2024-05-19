'use client';
import Link from 'next/link';
import { Logo } from '../../../public/icons/Logo';
import { Button } from '@/shared/components/Button';
import { ProfileImage } from '@/shared/components/ProfileImage';
import { DropDown } from '@/shared/components/DropDown';
import { useClickOutSide } from '@/shared/lib/hooks/useClickOutSide';
import React, { useState, useRef } from 'react';
import { Notification } from '../../../public/icons/Notification';
import { Browse } from '../../../public/icons/Browse';
import { InventorySvg } from '../../../public/icons/InventorySvg';
import { Inventory } from '@/shared/components/Inventory';
import { Search } from '@/shared/components/Search';
import { useAppContext } from '@/shared/context/page';
import { SignUp } from '../../../public/icons/SignUp';
import { SignIn } from '../../../public/icons/SignIn';
import { ProfileItem } from '@/shared/components/ProfileItem';
import { useAnimeStore } from '@/shared/store/store';
import { useRouter } from 'next/navigation';

export const NavBar = () => {
  const { useStore } = useAppContext();
  const router = useRouter();
  const isAuth = useStore((state) => state.isAuth);
  const isSearch = useAnimeStore((state) => state.isSearch);
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
  const handleChangeSearchBoolean = () => {
    router.push('/');
    if (isSearch) {
      useAnimeStore.setState((state) => ({
        isSearch: false,
      }));
    }
  };

  return (
    <header
      className={
        'flex gap-1 items-center px-1 sm:px-2 shadow-sm shadow-slate-950'
      }
    >
      <div className={'flex items-center justify-start sm:gap-2'}>
        <div
          className={
            'hidden sm:flex scale-125 justify-start min-h-14 min-w-14 max-w-14 max-h-14 w-full h-full cursor-pointer'
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
              eventButton: handleChangeSearchBoolean,
            }}
          />
        </div>
        <div
          className={
            'flex items-center justify-center p-1 sm:p-0 cursor-pointer'
          }
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
              eventButton: handleChangeSearchBoolean,
              text: {
                value: 'Browse',
                style:
                  'hidden sm:flex p-1 hover:bg-grayTransparent hover:rounded-lg',
              },
            }}
          />
        </div>
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
                    className={'absolute bottom-0 top-10 left-0 z-50'}
                  >
                    <Inventory />
                  </section>
                )}
              </DropDown>
            </div>
          </div>
        ) : null}
      </div>
      <div className={'flex justify-end sm:justify-center w-full'}>
        <Search />
      </div>
      {isAuth ? (
        <div
          className={
            'flex items-center justify-end max-w-max w-full md:gap-1.5'
          }
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
