'use client';
import { Content } from '@/shared/component/Content';
import { ProfileImage } from '@/shared/component/ProfileImage';
import { VideoCard } from '@/shared/component/VideoCard';
import { Input } from '@/shared/component/Input';
import { Button } from '@/shared/component/Button';
import { SearchSvg } from '../../public/icons/SearchSvg';
import React, { useEffect, useState } from 'react';
import { Watch } from '../../public/icons/Watch';
import { Viewed } from '../../public/icons/Viewed';
import { Track } from '../../public/icons/Track';
import { Favorite } from '../../public/icons/Favorite';
import { getUsers } from '@/entities/data/user-data/api/getUsers';
import { userInventory } from '@/entities/data/user-data/test-inventory/userInventory';
import { Inventory } from '@/shared/component/Inventory';

export default function Profile({ params }: { params: number }) {
  const [user, setUser] = useState<{
    name: string;
    id: number;
    isOnlineStatus: boolean;
    status: string;
  }>();

  useEffect(() => {
    getUsers
      .get('/users', {
        params: {
          id: params,
        },
      })
      .then((response) => {
        const userFind = response.data.find((item: any) => item.id === params);
        setUser(userFind);
      });
  }, [params]);

  return (
    <Content>
      {user && (
        <div key={user.id} className={'max-h-[100vh] w-full'}>
          <div
            className={'flex flex-wrap gap-3 items-center max-w-max pb-5 px-4'}
          >
            <div>
              <ProfileImage
                setting={{
                  width: 70,
                  height: 70,
                  style: `border-2 ${user.isOnlineStatus ? 'bg-green-500' : 'border-gray-500'}`,
                  isOnlineSize: {
                    height: 20,
                    width: 20,
                  },
                  isOnlineStatus: user.isOnlineStatus,
                }}
              />
            </div>
            <div className={'flex flex-col'}>
              <span> name: {user.name}</span>
              <span>
                status user: {user.isOnlineStatus ? 'online' : 'offline'}{' '}
              </span>
              <span> unique: {user.status}</span>
            </div>
          </div>
          <Inventory />
        </div>
      )}
    </Content>
  );
}
