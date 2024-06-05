'use client';
import Link from 'next/link';
import { Recommended } from '../../../public/icons/Recommended';
import { ArrowBar } from '../../../public/icons/ArrowBar';
import { useEffect, useState } from 'react';
import { Button } from '@/shared/components/Button';
import AnimeService from '@/features/anime/lib/AnimeService';
import { GetRandomTitle } from '@/features/anime/api/getRandomTitle';

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const stateMenu = {
    rotate: isOpen ? 'rotate-0' : 'rotate-180',
    display: isOpen ? 'flex' : 'hidden',
    widthStyleIsOpenSvg: isOpen ? 'w-full justify-end' : 'w-0',
    width: 'max-w-max',
  };
  const { data } = GetRandomTitle();

  const handleChange = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
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
            href={`/video/${data?.id}`}
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
