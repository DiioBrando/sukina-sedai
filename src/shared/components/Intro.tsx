import Image from 'next/image';
import React from 'react';
import { IIntro } from '@/entities/models/IIntro';

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
    </div>
  );
};
