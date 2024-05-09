'use client';
import { Content } from '@/shared/component/Content';
import { ProfileImage } from '@/shared/component/ProfileImage';
import React, { useLayoutEffect, useState } from 'react';
import { Inventory } from '@/shared/component/Inventory';
import { IUser } from '@/entities/models/IAuth';
import UserService from '@/features/auth/lib/UserService';

export default function Profile({ params }: { params: string }) {
  const [store, setStore] = useState<IUser>();

  useLayoutEffect(() => {
    const getUser = async () => {
      await UserService.fetchUsers().then((res) => {
        const user = res.data.filter((user) => user.login === params)[0];
        setStore(user);
      });
    };

    getUser();
  }, [params]);

  return (
    <Content>
      {store && (
        <div key={store.id} className={'max-h-[100vh] w-full'}>
          <div
            className={'flex flex-wrap gap-3 items-center max-w-max pb-5 px-4'}
          >
            <div>
              <ProfileImage
                setting={{
                  width: 70,
                  height: 70,
                  style: `border-2 border-gray-500`,
                  isOnlineSize: {
                    height: 20,
                    width: 20,
                  },
                }}
              />
            </div>
            <div className={'flex flex-col'}>
              <span> name: {store.login}</span>
              <span>status user: {store.roles}</span>
            </div>
          </div>
          <Inventory />
        </div>
      )}
    </Content>
  );
}
