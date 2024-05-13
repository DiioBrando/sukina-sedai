import { Input } from '@/shared/components/Input';
import { Button } from '@/shared/components/Button';
import { SearchSvg } from '../../../public/icons/SearchSvg';
import { Watch } from '../../../public/icons/Watch';
import { Viewed } from '../../../public/icons/Viewed';
import { Track } from '../../../public/icons/Track';
import { Favorite } from '../../../public/icons/Favorite';
import { VideoCard } from '@/shared/components/VideoCard';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/shared/context/page';
import { Titles } from '@/entities/data/anime-data/model/IAnimeListType';
import InventoryService from '@/features/inventory/lib/InventoryService';
import { AxiosResponse } from 'axios';
import { $api } from '@/entities/data/anime-data/api/api';

export const Inventory = () => {
  const [anime, setAnime] = useState<Titles[]>([]);
  const [listId, setListId] = useState<string>('');
  const { useStore } = useAppContext();
  const currentUserId = useStore((state) => state.user.id);

  useEffect(() => {
    InventoryService.getAll().then((res) => {
      const list = res.data
        .filter((item) => item.idUser === currentUserId)
        .map((item) => item.animeId)
        .join(',');
      setListId(list);
    });
  }, [currentUserId]);

  useEffect(() => {
    const getAnime = async (): Promise<AxiosResponse<Titles[]>> => {
      return await $api.get(`/title/list?id_list=${listId}`);
    };
    if (listId) {
      getAnime().then((res) => setAnime(res.data));
    }
  }, [listId]);

  return (
    <div
      className={
        'px-4 flex flex-col gap-4 bg-white border max-w-max p-2 rounded-md dark:bg-slate-900'
      }
    >
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
                image: <SearchSvg />,
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
              styleButton: 'p-1',
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
              styleButton: 'p-1',
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
              styleButton: 'p-1',
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
              styleButton: 'p-1',
            }}
          />
        </div>
      </div>
      <div
        className={
          'flex flex-wrap gap-2.5 max-h-[500px] w-full overflow-y-auto justify-center sm:justify-start'
        }
      >
        {anime && <VideoCard list={anime} />}
      </div>
    </div>
  );
};
