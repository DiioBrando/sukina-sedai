import Image from 'next/image';
import React from 'react';
import { IIntro } from '@/entities/IIntro';

export const Intro: React.FC<IIntro> = ({
  id,
  introName,
  width,
  height,
  ratingKinopoisk,
  ratingIMDb,
  className,
}) => {
  return (
    <div key={id} className={'h-fit max-w-max'}>
      <Image
        className={className}
        width={width}
        height={height}
        src={`https://anilibria.tv${introName ?? ''}`}
        priority={true}
        alt={''}
      />
      {/*<div className={'absolute bottom-[6px] right-1 flex gap-2 text-sm'}>*/}
      {/*    <div className={'flex gap-1 rounded-md bg-purple-500 px-1.5 text-white'}>*/}
      {/*        <span>IMDb:</span>*/}
      {/*        <span>{ratingIMDb}</span>*/}
      {/*    </div>*/}
      {/*    <div className={'flex gap-1 rounded-md bg-purple-500 px-1.5 text-white'}>*/}
      {/*        <span>Kinopoisk:</span>*/}
      {/*        <span>{ratingKinopoisk}</span>*/}
      {/*    </div>*/}
      {/*</div>*/}
    </div>
  );
};
