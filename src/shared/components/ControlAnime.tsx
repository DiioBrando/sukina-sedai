import { Button } from '@/shared/components/Button';
import { Watch } from '../../../public/icons/Watch';
import { Viewed } from '../../../public/icons/Viewed';
import { Track } from '../../../public/icons/Track';
import { Favorite } from '../../../public/icons/Favorite';
import React, { ChangeEvent } from 'react';
import InventoryService from '@/features/inventory/lib/InventoryService';
import { useAppContext } from '@/shared/context/page';

export const ControlAnime = ({ idAnime }: { idAnime: number }) => {
  const { useStore } = useAppContext();
  const _id = useStore((state) => state.user.id);
  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    InventoryService.addAnime(String(idAnime), e.currentTarget.value);
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
            styleButton: 'p-1',
            eventButton: (e) => handleAdd(e),
            value: 'watch',
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
            eventButton: (e) => handleAdd(e),
            value: 'viewed',
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
            eventButton: (e) => handleAdd(e),
            value: 'track',
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
            eventButton: (e) => handleAdd(e),
            value: 'favorite',
            styleButton: 'p-1',
          }}
        />
      </div>
    </div>
  );
};
