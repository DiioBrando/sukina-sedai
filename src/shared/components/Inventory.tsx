import { Input } from '@/shared/components/Input';
import { Button } from '@/shared/components/Button';
import { SearchSvg } from '../../../public/icons/SearchSvg';
import { Watch } from '../../../public/icons/Watch';
import { Viewed } from '../../../public/icons/Viewed';
import { Track } from '../../../public/icons/Track';
import { Favorite } from '../../../public/icons/Favorite';
import { VideoCard } from '@/shared/components/VideoCard';
import React, { ChangeEvent, useState } from 'react';
import { Trash } from '../../../public/icons/Trash';
import { ThreeDot } from '../../../public/icons/ThreeDot';
import { DropDown } from '@/shared/components/DropDown';
import { Loader } from '@/shared/components/Loader';
import { GetAllInventory } from '@/features/inventory/api/getAllInventory';
import { useUserStore } from '@/shared/stores/UserStore';

export const Inventory = ({ userId }: { userId: string }) => {
  const currentUserId = useUserStore((state) => state.user.id);
  const [arrayWithAnimeId, setArrayWithAnimeId] = useState<Array<number>>([]);
  const [categoryAnime, setCategory] = useState<string>('watch');
  const [isOpen, setOpen] = useState({
    threeDot: false,
    manyDelete: false,
  });
  const { data, isFetching, isError } = GetAllInventory({
    userId,
    categoryAnime,
  });

  console.log(data);
  const toggleValue = (value: keyof typeof isOpen) => {
    setOpen((prevState) => ({ ...prevState, [value]: !prevState[value] }));
  };
  const handleChangeOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const value = e.currentTarget.value as keyof typeof isOpen;
    if (value in isOpen) {
      toggleValue(value);
    }
  };

  const handleChangeArrayAnimeId = (e: ChangeEvent<HTMLInputElement>) => {
    const idAnime = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      return setArrayWithAnimeId((prevState) => [
        ...prevState,
        Number(idAnime),
      ]);
    }

    setArrayWithAnimeId((prevState) =>
      [...prevState].filter((item) => item != Number(idAnime)),
    );
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    // (Number(e.currentTarget.value));
  };

  const handleChangeCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log(e.currentTarget.value);
    setCategory(e.currentTarget.value);
  };
  const handleSubmitDelete = () => {
    const toStringItem = arrayWithAnimeId.map(String);
    // (toStringItem);
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
        {userId !== currentUserId ? null : (
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
        )}
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
              <DropDown>
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
              </DropDown>
            )}
          </div>
        ) : null}
      </div>

      <div
        className={
          'flex flex-wrap gap-2.5 max-h-[500px] w-full overflow-y-auto justify-center sm:justify-start'
        }
      >
        {isFetching ? (
          <div className={'flex w-full items-center justify-center'}>
            <Loader />
          </div>
        ) : !data?.length ? (
          <div>not found anime</div>
        ) : (
          Array.from({ length: data.length }, (_v, k) => (
            <div key={k}>
              {data && (
                <div className={'relative'}>
                  <VideoCard list={[data[k]]} />

                  {userId !== currentUserId ? null : (
                    <div
                      className={
                        'absolute top-2 left-2 rounded-lg flex p-2 gap-2 bg-gray-500'
                      }
                    >
                      {isOpen.manyDelete ? (
                        <Input
                          input={{
                            type: 'checkbox',
                            value: String(data[k].id),
                            onChange: handleChangeArrayAnimeId,
                            style: 'w-10 h-10',
                          }}
                        />
                      ) : (
                        <Button
                          setting={{
                            eventButton: handleDelete,
                            value: String(data[k].id),
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
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
