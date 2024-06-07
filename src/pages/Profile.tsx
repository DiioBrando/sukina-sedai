'use client';
import { Content } from '@/shared/components/Content';
import { ProfileImage } from '@/shared/components/ProfileImage';
import React, { useEffect, useState } from 'react';
import { Inventory } from '@/shared/components/Inventory';
import { IUser } from '@/entities/models/IAuth';
import { useProfiles } from '@/shared/lib/hooks/useProfiles';
import { Comment } from 'postcss';
import { Comments } from '@/shared/components/Comments';
import { useAppContext } from '@/shared/context/page';

export default function Profile({ params }: { params: string }) {
  const { data, isFetching, error } = useProfiles();
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    const userData = data?.data.filter((item) => item.login === params)[0];
    setUser(userData);
  }, [data?.data, params]);

  return (
    <Content>
      {user && (
        <div key={user.id} className={'max-h-[100vh] w-full p-4'}>
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
              <span> name: {user.login}</span>
              <span> role: {user.roles}</span>
            </div>
          </div>
          <Inventory userId={user.id} />
        </div>
      )}
    </Content>
  );
}
