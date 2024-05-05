'use client';
import { Content } from '@/shared/component/Content';
import { ProfileImage } from '@/shared/component/ProfileImage';
import React from 'react';
import { Inventory } from '@/shared/component/Inventory';
import { useAppContext } from '@/shared/context/page';

export default function Profile({ params }: { params: number }) {
  const { store } = useAppContext();
  return (
    <Content>
      {store && (
        <div key={store.user.id} className={'max-h-[100vh] w-full'}>
          <div
            className={'flex flex-wrap gap-3 items-center max-w-max pb-5 px-4'}
          >
            <div>
              <ProfileImage
                setting={{
                  width: 70,
                  height: 70,
                  style: `border-2 ${store.isAuth ? 'bg-green-500' : 'border-gray-500'}`,
                  isOnlineSize: {
                    height: 20,
                    width: 20,
                  },
                  isOnlineStatus: store.isAuth,
                }}
              />
            </div>
            <div className={'flex flex-col'}>
              <span> name: {store.user.login}</span>
              <span>status user: {store.isAuth ? 'online' : 'offline'} </span>
            </div>
          </div>
          <Inventory />
        </div>
      )}
    </Content>
  );
}
