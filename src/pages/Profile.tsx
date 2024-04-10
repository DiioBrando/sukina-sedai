'use client';
import { Content } from '@/features/sedai-services/components/Content';
import { ProfileImage } from '@/features/sedai-services/components/ProfileImage';
import { VideoCard } from '@/features/sedai-services/components/VideoCard';
import { Input } from '@/features/sedai-services/components/Input';
import { Button } from '@/features/sedai-services/components/Button';
import { Search } from '../../public/icons/Search';
import React, { useEffect, useState } from 'react';
import { Watch } from '../../public/icons/Watch';
import { Viewed } from '../../public/icons/Viewed';
import { Track } from '../../public/icons/Track';
import { Favorite } from '../../public/icons/Favorite';
import { getUsers } from '@/entities/data/user-data/api/getUsers';

export const Profile = ({ params }: { params: number }) => {
  const [user, setUser] = useState<{
    name: string;
    id: number;
    isOnlineStatus: boolean;
    status: string;
  }>();

  const [inventory, setInventory] = useState<{
    watch: boolean;
    viewed: boolean;
    track: boolean;
    favorite: boolean;
  }>({
    watch: true,
    viewed: false,
    track: false,
    favorite: false,
  });

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
                  style: 'border-2 border-black',
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
                {' '}
                status user: {user.isOnlineStatus ? 'online' : 'offline'}{' '}
              </span>
              <span> unique: {user.status}</span>
            </div>
          </div>
          <div className={'px-4 flex flex-col gap-4'}>
            <div className={'flex md:max-w-80 w-full'}>
              <Input
                input={{
                  placeholder: 'search inventory anime here',
                  style: 'p-1 px-4 border-r-0 rounded-r-none rounded-md flex',
                }}
              />
              <Button
                setting={{
                  image: {
                    svgComponent: {
                      image: <Search />,
                      style:
                        'w-[50px] h-[34px] border-customBorderWhite border flex p-1 rounded-md rounded-l-none',
                    },
                  },
                  styleButton: 'p-0 sm:hover:rounded-l-none',
                }}
              />
            </div>
            <div className={'flex gap-2 justify-center md:justify-start'}>
              <div>
                <Button
                  setting={{
                    image: {
                      svgComponent: {
                        image: <Watch />,
                        style: 'w-5 h-5',
                      },
                    },
                    styleButton:
                      'p-1 ' +
                      `${inventory.watch ? 'bg-grayTransparent rounded-md' : ''}`,
                    eventButton: () =>
                      setInventory({
                        ...inventory,
                        watch: true,
                        track: false,
                        favorite: false,
                        viewed: false,
                      }),
                  }}
                />
              </div>
              <div>
                <Button
                  setting={{
                    image: {
                      svgComponent: {
                        image: <Viewed />,
                        style: 'w-5 h-5',
                      },
                    },
                    styleButton:
                      'p-1 ' +
                      `${inventory.viewed ? 'bg-grayTransparent rounded-md' : ''}`,
                    eventButton: () =>
                      setInventory({
                        ...inventory,
                        viewed: true,
                        track: false,
                        watch: false,
                        favorite: false,
                      }),
                  }}
                />
              </div>
              <div>
                <Button
                  setting={{
                    image: {
                      svgComponent: {
                        image: <Track />,
                        style: 'w-5 h-5',
                      },
                    },
                    styleButton:
                      'p-1 ' +
                      `${inventory.track ? 'bg-grayTransparent rounded-md' : ''}`,
                    eventButton: () =>
                      setInventory({
                        ...inventory,
                        track: true,
                        watch: false,
                        viewed: false,
                        favorite: false,
                      }),
                  }}
                />
              </div>
              <div>
                <Button
                  setting={{
                    image: {
                      svgComponent: {
                        image: <Favorite />,
                        style: 'w-5 h-5',
                      },
                    },
                    styleButton:
                      'p-1 ' +
                      `${inventory.favorite ? 'bg-grayTransparent rounded-md' : ''}`,
                    eventButton: () =>
                      setInventory({
                        ...inventory,
                        favorite: true,
                        track: false,
                        watch: false,
                        viewed: false,
                      }),
                  }}
                />
              </div>
            </div>
            <div
              className={
                'flex flex-wrap gap-2.5 max-h-[500px] w-full overflow-y-auto justify-center sm:justify-start'
              }
            >
              <VideoCard list={[]} />
            </div>
          </div>
        </div>
      )}
    </Content>
  );
};
