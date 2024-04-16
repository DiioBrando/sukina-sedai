import { Button } from '@/shared/component/Button';
import { Watch } from '../../../public/icons/Watch';
import { Viewed } from '../../../public/icons/Viewed';
import { Track } from '../../../public/icons/Track';
import { Favorite } from '../../../public/icons/Favorite';
import React, { useEffect, useState } from 'react';
import { userInventory } from '@/entities/data/user-data/test-inventory/userInventory';
import { $api } from '@/entities/data/anime-data/api/api';
import { Titles } from '@/entities/data/anime-data/lib/IAnimeListType';

type animeIdType = {
  idAnime: number;
};

export const ControlAnime: React.FC<animeIdType> = ({ idAnime }) => {
  const [hasItemInventory, setHasItemInventory] = useState<{
    watch: boolean;
    viewed: boolean;
    track: boolean;
    favorite: boolean;
  }>({
    watch: false,
    viewed: false,
    track: false,
    favorite: false,
  });
  const [anime, setAnime] = useState<Titles>();

  useEffect(() => {
    const findAnime = async () => {
      $api
        .get('/title', {
          params: {
            id: idAnime,
          },
        })
        .then((res) => {
          setAnime(res.data);
        });
    };
    findAnime();
  }, [idAnime]);

  const handleInventory = (
    anime: any,
    array: any,
    hasItemInventoryBoolean: boolean,
  ) => {
    const findInd = array.findIndex(
      (obj: { id: number }) => obj.id === anime.id,
    );
    if (findInd !== -1) array.splice(findInd, 1);

    hasItemInventoryBoolean && findInd !== -1
      ? array.splice(findInd, 1)
      : array.push(anime);
  };
  return (
    <div className={'flex gap-2 justify-center md:justify-start py-2 md:py-4'}>
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
              `${hasItemInventory.watch ? 'bg-grayTransparent rounded-md' : ''}`,
            eventButton: () => {
              setHasItemInventory({
                ...hasItemInventory,
                watch: !hasItemInventory.watch,
              });
              handleInventory(anime, userInventory, hasItemInventory.watch);
            },
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
              `${hasItemInventory.viewed ? 'bg-grayTransparent rounded-md' : ''}`,
            eventButton: () => {
              setHasItemInventory({
                ...hasItemInventory,
                viewed: !hasItemInventory.viewed,
              });
              handleInventory(anime, userInventory, hasItemInventory.viewed);
            },
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
              `${hasItemInventory.track ? 'bg-grayTransparent rounded-md' : ''}`,
            eventButton: () => {
              setHasItemInventory({
                ...hasItemInventory,
                track: !hasItemInventory.track,
              });
              handleInventory(anime, userInventory, hasItemInventory.track);
            },
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
              `${hasItemInventory.favorite ? 'bg-grayTransparent rounded-md' : ''}`,
            eventButton: () => {
              setHasItemInventory({
                ...hasItemInventory,
                favorite: !hasItemInventory.favorite,
              });
              handleInventory(anime, userInventory, hasItemInventory.favorite);
            },
          }}
        />
      </div>
    </div>
  );
};
