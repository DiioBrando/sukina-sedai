import { Input } from '@/features/sedai-services/components/Input';
import { Button } from '@/features/sedai-services/components/Button';
import { Search } from '../../../../public/icons/Search';
import { Watch } from '../../../../public/icons/Watch';
import { Viewed } from '../../../../public/icons/Viewed';
import { Track } from '../../../../public/icons/Track';
import { Favorite } from '../../../../public/icons/Favorite';
import { VideoCard } from '@/features/sedai-services/components/VideoCard';
import { userInventory } from '@/entities/data/user-data/test-inventory/userInventory';
import React, { useState } from 'react';

export const Inventory = () => {
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

  return (
    <div
      className={
        'px-4 flex flex-col gap-4 bg-white border max-w-max p-2 rounded-md'
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
        <VideoCard list={userInventory.list} />
      </div>
    </div>
  );
};
