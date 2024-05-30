'use client';
import Link from 'next/link';
import { Recommended } from '../../../public/icons/Recommended';
import { ArrowBar } from '../../../public/icons/ArrowBar';
import { useEffect, useState } from 'react';
import { Button } from '@/shared/components/Button';
import AnimeService from '@/features/anime/lib/AnimeService';

export const SideBar = () => {
  const [stateMenu, setStateMenu] = useState({
    isOpen: true,
    rotate: 'rotate-0',
    display: 'flex',
    widthStyleIsOpenSvg: 'w-full justify-end',
    width: 'max-w-max',
  });
  const [randomAnimeId, setRandomAnimeId] = useState<number>(0);
  useEffect(() => {
    AnimeService.getRandomAnim().then((res) => {
      setRandomAnimeId(res.data.id);
    });
  }, []);

  const handleChange = () => {
    if (stateMenu.isOpen) {
      setStateMenu({
        ...stateMenu,
        rotate: 'rotate-180',
        display: 'hidden',
        isOpen: false,
        widthStyleIsOpenSvg: 'w-0',
      });
    } else {
      setStateMenu({
        ...stateMenu,
        rotate: 'rotate-0',
        display: 'flex',
        isOpen: true,
        widthStyleIsOpenSvg: 'w-full justify-end',
      });
    }
  };

  return (
    <section className={`${stateMenu.width} min-w-max max-h-max w-full`}>
      <div className={'h-full p-2'}>
        <div className={'flex flex-1 flex-col gap-2.5'}>
          <div className={'hidden md:flex items-center'}>
            <span className={`hidden text-lg px-1 lg:${stateMenu.display}`}>
              Menu
            </span>
            <p className={`hidden lg:flex ${stateMenu.widthStyleIsOpenSvg}`}>
              <Button
                setting={{
                  eventButton: handleChange,
                  image: {
                    svgComponent: {
                      image: <ArrowBar />,
                      style: `w-5 h-5 ${stateMenu.rotate}`,
                    },
                  },
                  styleButton: 'p-1',
                }}
              />{' '}
            </p>
          </div>
          <Link
            className={'flex items-center gap-1 text-md'}
            href={`/video/${randomAnimeId}`}
          >
            <Button
              setting={{
                image: {
                  svgComponent: {
                    image: <Recommended />,
                    style: 'w-5 h-5',
                  },
                },
                styleButton: 'p-1',
              }}
            />
            <span className={`lg:${stateMenu.display} hidden`}>
              Recommended anime
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
