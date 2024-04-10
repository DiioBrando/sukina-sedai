import { Tags } from '@/features/sedai-services/components/Tags';
import { Intro } from '@/features/sedai-services/components/Intro';
import { IAnime } from '@/entities/data/anime-data/lib/IAnimeListType';
import Link from 'next/link';
import React from 'react';

export const VideoCard: React.FC<IAnime> = ({ list }) => {
  return (
    list &&
    list.map((item) => (
      <div
        key={item.id}
        className={
          'flex flex-col flex-1 min-h-80 h-fit lg:max-h-[450px] min-w-[200px] max-w-[230px]  lg:h-full gap-1 pb-2'
        }
      >
        <Link className={'max-w-[230px]'} href={`/video/${item.id}`}>
          <Intro
            id={item.id}
            introName={item.posters.medium.url}
            className={'max-h-[300px] rounded-md'}
            width={230}
            height={300}
            ratingKinopoisk={0}
            ratingIMDb={0}
          />
          <div className={'max-w-[250px] flex flex-col gap-1.5 px-0.5'}>
            <div className={'flex flex-col gap-1'}>
              <span className={'flex flex-1 text-sm'}>{item.names.ru}</span>
              <span className={'text-xs'}>{item.season.year}</span>
            </div>
            <div className={'flex flex-wrap gap-1'}>
              {item.genres.slice(0, 4).map((tag: string) => (
                <Tags key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </Link>
      </div>
    ))
  );
};
