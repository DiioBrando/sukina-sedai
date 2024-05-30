import { Release } from '@/entities/models/IAnimeListType';
import React from 'react';
import Link from 'next/link';

export const Franchises: React.FC<Release> = ({
  id,
  ordinal,
  names,
  code,
  currentId,
}) => {
  return (
    <Link
      className={`flex p-2 border border-customBorderWhite rounded-lg max-w-[578px] ${id === currentId ? 'pointer-events-none bg-grayTransparent' : 'hover:bg-grayTransparent'}`}
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
