import { Release } from '@/entities/data/anime-data/lib/IAnimeListType';
import React from 'react';
import Link from 'next/link';

export const Franchises: React.FC<Release> = ({ id, ordinal, names, code }) => {
  return (
    <Link
      className={
        'flex p-2 border border-customBorderWhite hover:bg-grayTransparent rounded-lg max-w-[578px]'
      }
      href={`/video/${id}`}
    >
      <div className={'flex'}>
        <div className={'flex flex-col text-wrap'}>
          <p className={'text-sm'}>{names.ru}</p>
          <p className={'text-sm'}>{names.en}</p>
        </div>
      </div>
    </Link>
  );
};
