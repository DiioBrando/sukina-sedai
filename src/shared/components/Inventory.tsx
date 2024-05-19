import { Input } from '@/shared/components/Input';
import { Button } from '@/shared/components/Button';
import { SearchSvg } from '../../../public/icons/SearchSvg';
import { Watch } from '../../../public/icons/Watch';
import { Viewed } from '../../../public/icons/Viewed';
import { Track } from '../../../public/icons/Track';
import { Favorite } from '../../../public/icons/Favorite';
import { VideoCard } from '@/shared/components/VideoCard';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppContext } from '@/shared/context/page';
import { Titles } from '@/entities/data/anime-data/model/IAnimeListType';
import InventoryService from '@/features/inventory/lib/InventoryService';
import { AxiosResponse } from 'axios';
import { $api } from '@/entities/data/anime-data/api/api';
import { Trash } from '../../../public/icons/Trash';
import { ThreeDot } from '../../../public/icons/ThreeDot';
import { DropDown } from '@/shared/components/DropDown';

export const Inventory = () => {
  const [anime, setAnime] = useState<Titles[]>([]);
  const [arrayWithAnimeId, setArrayWithAnimeId] = useState<Array<string>>([]);
  const [listId, setListId] = useState<string>('');
  const [categoryAnime, setCategory] = useState<string>('watch');
  const [isOpen, setOpen] = useState({
    threeDot: false,
    manyDelete: false,
  });
  const { useStore } = useAppContext();
  const currentUserId = useStore((state) => state.user.id);

  useEffect(() => {
    InventoryService.getAll().then((res) => {
      const list = res.data
        .filter((item) => item.idUser === currentUserId)
        .filter((item) => item.typeItem === categoryAnime)
        .map((item) => item.animeId)
        .join(',');
      setListId(list);
    });
  }, [categoryAnime, currentUserId]);

  useEffect(() => {
    const getAnime = async (): Promise<AxiosResponse<Titles[]>> => {
      return await $api.get(`/title/list?id_list=${listId}`);
    };
    if (listId) {
      getAnime().then((res) => setAnime(res.data));
    }
  }, [listId]);

  const toggleValue = (value: keyof typeof isOpen) => {
    setOpen((prevState) => ({ ...prevState, [value]: !prevState[value] }));
  };

  const handleChangeOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const value = e.currentTarget.value as keyof typeof isOpen;
    console.log(value);
    if (value in isOpen) {
      toggleValue(value);
    }
  };

  const handleChangeCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setCategory(e.currentTarget.value);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    return InventoryService.deleteAnime(e.currentTarget.value);
  };

  const handleChangeArrayAnimeId = (e: ChangeEvent<HTMLInputElement>) => {
    const idAnime = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      return setArrayWithAnimeId((prevState) => [...prevState, idAnime]);
    }

    setArrayWithAnimeId((prevState) =>
      [...prevState].filter((item) => item != idAnime),
    );
  };
  const handleSubmitDelete = () => {
    InventoryService.deleteMany(arrayWithAnimeId);
    setOpen((prevState) => ({ ...prevState, manyDelete: false }));
  };

  return (
    <div
      className={
        'px-4 flex flex-col gap-4 bg-white border p-2 rounded-md dark:bg-slate-900'
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

      <div className={'flex gap-2 relative'}>
        <Button
          setting={{
            image: {
              svgComponent: {
                image: <Watch />,
                style: 'w-5 h-5',
              },
            },
            styleButton: 'p-1',
            value: 'watch',
            eventButton: handleChangeCategory,
          }}
        />
        <Button
          setting={{
            image: {
              svgComponent: {
                image: <Viewed />,
                style: 'w-5 h-5',
              },
            },
            styleButton: 'p-1',
            value: 'viewed',
            eventButton: handleChangeCategory,
          }}
        />
        <Button
          setting={{
            image: {
              svgComponent: {
                image: <Track />,
                style: 'w-5 h-5',
              },
            },
            styleButton: 'p-1',
            value: 'track',
            eventButton: handleChangeCategory,
          }}
        />
        <Button
          setting={{
            image: {
              svgComponent: {
                image: <Favorite />,
                style: 'w-5 h-5',
              },
            },
            styleButton: 'p-1',
            value: 'favorite',
            eventButton: handleChangeCategory,
          }}
        />
        <Button
          setting={{
            styleButton: 'p-1',
            image: {
              svgComponent: {
                image: <ThreeDot />,
                style: 'w-5 h-5',
              },
            },
            value: 'threeDot',
            eventButton: handleChangeOpen,
          }}
        />
        {isOpen.threeDot ? (
          <div
            className={
              'p-1 bg-white text-slate-800 dark:bg-slate-700 dark:text-slightlyGrayishWhite rounded-lg flex absolute top-0 left-0 z-40'
            }
          >
            {isOpen.manyDelete ? (
              <DropDown>
                <div>
                  <Button
                    setting={{
                      text: {
                        value: 'submit',
                      },
                      styleButton: 'px-2',
                      eventButton: handleSubmitDelete,
                    }}
                  />
                  <Button
                    setting={{
                      text: {
                        value: 'cansel',
                      },
                      styleButton: 'px-2',
                      value: 'manyDelete',
                      eventButton: handleChangeOpen,
                    }}
                  />
                </div>
              </DropDown>
            ) : (
              <>
                <Button
                  setting={{
                    text: {
                      value: 'many delete',
                    },
                    value: 'manyDelete',
                    styleButton: 'p-1',
                    eventButton: handleChangeOpen,
                  }}
                />
                <Button
                  setting={{
                    text: {
                      value: 'delete all',
                    },
                    styleButton: 'p-1',
                    value: 'delete all',
                    eventButton: handleSubmitDelete,
                  }}
                />
                <Button
                  setting={{
                    text: {
                      value: 'cansel',
                    },
                    styleButton: 'p-1',
                    value: 'threeDot',
                    eventButton: handleChangeOpen,
                  }}
                />
              </>
            )}
          </div>
        ) : null}
      </div>

      <div
        className={
          'flex flex-wrap gap-2.5 max-h-[500px] w-full overflow-y-auto justify-center sm:justify-start'
        }
      >
        {!anime.length ? (
          <div>not found anime</div>
        ) : (
          Array.from({ length: anime.length }, (_v, k) => (
            <div key={k}>
              {anime && (
                <div className={'relative'}>
                  <VideoCard list={[anime[k]]} />
                  <div
                    className={
                      'absolute top-2 left-2 rounded-lg flex p-2 gap-2'
                    }
                  >
                    {isOpen.manyDelete ? (
                      <Input
                        input={{
                          type: 'checkbox',
                          value: String(anime[k].id),
                          onChange: handleChangeArrayAnimeId,
                          style: 'w-10 h-10',
                        }}
                      />
                    ) : (
                      <Button
                        setting={{
                          eventButton: handleDelete,
                          value: String(anime[k].id),
                          text: {
                            value: 'delete',
                            style: 'hidden md:flex px-2',
                          },
                          image: {
                            svgComponent: {
                              image: <Trash />,
                              style: 'w-5 h-5 flex md:hidden',
                            },
                          },
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
