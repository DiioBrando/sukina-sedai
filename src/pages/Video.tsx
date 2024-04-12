'use client';
import { Content } from '@/features/sedai-services/components/Content';
import Link from 'next/link';
import { Tags } from '@/features/sedai-services/components/Tags';
import { Rating } from '@/features/sedai-services/components/Rating';
import { Intro } from '@/features/sedai-services/components/Intro';
import { VideoPlayer } from '@/features/sedai-services/components/VideoPlayer';
import { Message } from '@/features/sedai-services/components/Message';
import { Comments } from '@/features/sedai-services/components/Comments';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { $api } from '@/entities/data/anime-data/api/api';
import {
  Hls,
  List,
  Skips,
  Titles,
} from '@/entities/data/anime-data/lib/IAnimeListType';
import { animeArray } from '@/entities/data/anime-data/animeArray';
import { ControlAnime } from '@/features/sedai-services/components/ControlAnime';
import { Button } from '@/features/sedai-services/components/Button';

export const Video = ({ params }: { params: number }) => {
  const [anime, setAnime] = useState<Titles>();

  const [currentPart, setCurrentPart] = useState<number>(1);
  const [parts, setParts] = useState<List[]>();

  useEffect(() => {
    const getAnime = async () =>
      await $api.get('/title', {
        params: {
          id: params,
          playlist_type: 'array',
        },
      });

    getAnime()
      .then((res) => {
        setAnime(res.data);
        setParts(res.data.player.list);
      })
      .catch((e) => console.log(e));
  }, [params]);

  return (
    <Content>
      <div
        className={
          'flex flex-col overflow-y-auto max-h-[93.3vh] pb-10 p-5 w-full'
        }
      >
        <div className={'flex flex-col'}>
          <div
            className={
              'w-full h-full flex flex-col sm:flex-row gap-2 p-2 max-w-max'
            }
          >
            <div className={'max-w-[300px] min-w-[200px] h-fit'}>
              <Intro
                className={'rounded-md'}
                id={1}
                introName={anime?.posters.original.url ?? ''}
                width={300}
                height={300}
                ratingKinopoisk={0}
                ratingIMDb={0}
              />
              {anime && <ControlAnime idAnime={anime.id} />}
            </div>
            <div className={'flex flex-col min-w-[200px] h-fit'}>
              <div className={'max-w-max h-fit'}>
                <h1 className={'text-xl'}>{anime && anime.names.ru}</h1>
                <p className={'text-sm'}>{anime && anime.names.en}</p>
                <div className={'flex flex-wrap gap-1 md:gap-0.5 py-2'}>
                  {anime &&
                    anime.genres.map((tag) => (
                      <Link
                        key={tag}
                        className={
                          'hover:bg-purple-500 hover:rounded-full flex items-center max-w-max max-h-max'
                        }
                        href={''}
                      >
                        <Tags tag={tag} />
                      </Link>
                    ))}
                </div>
                <div className={'flex flex-col gap-1'}>
                  <Link
                    href={''}
                    className={
                      'hover:bg-purple-500 hover:rounded-full flex items-center max-w-max max-h-max'
                    }
                  >
                    <span className={'px-1'}>{anime && anime.season.year}</span>
                  </Link>
                  <Link
                    href={''}
                    className={
                      'hover:bg-purple-500 hover:rounded-full flex items-center max-w-max max-h-max'
                    }
                  >
                    <span className={'px-1'}>
                      {anime && anime.status.string}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={'flex flex-wrap md:justify-center gap-2 md:p-4'}>
            <Rating
              ratingName={'the plot'}
              maxNumRating={10}
              ratingObject={animeArray.userRating.thePlot}
            />
            <Rating
              ratingName={'characters'}
              maxNumRating={10}
              ratingObject={animeArray.userRating.characters}
            />
            <Rating
              ratingName={'drawing'}
              maxNumRating={10}
              ratingObject={animeArray.userRating.drawing}
            />
          </div>
          <div className={'flex flex-wrap py-4 md:px-4'}>
            <h2
              className={
                'w-full text-xl md:text-2xl  lg:text-center break-words'
              }
            >
              {anime && anime.names.ru}
            </h2>
            <p
              className={
                'w-full text-lg md:text-xl  lg:text-center break-words'
              }
            >
              {anime && anime.names.en}
            </p>
            <p className={'text-md md:text-lg break-words'}>
              {anime && anime.description}
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className={'flex flex-col justify-center items-center'}>
              {parts &&
                parts.map((item, index) =>
                  item.episode === currentPart ? (
                    <VideoPlayer key={item.uuid ?? index} hls={item.hls} />
                  ) : (
                    ''
                  ),
                )}
            </div>
            <div className={'flex w-full p-2'}>
              <div className={'flex w-full justify-start'}>
                <Button
                  setting={{
                    text: {
                      style: 'px-3',
                      value: 'prev part',
                    },
                    styleButton: `${currentPart <= 1 ? 'hidden' : ''}`,
                    eventButton: () => {
                      if (currentPart === 0) return;

                      const prevPart = currentPart - 1;
                      setCurrentPart(prevPart);
                    },
                  }}
                />
              </div>
              <div className={'flex w-full justify-center max-w-max'}>
                <select
                  className={'flex rounded-md p-1 px-2 w-full items-center'}
                  value={currentPart}
                  onChange={(e) =>
                    setCurrentPart(Number(e.currentTarget.value))
                  }
                >
                  {parts &&
                    parts.map((item) => (
                      <option key={item.uuid} value={item.episode}>
                        {item.episode} part
                      </option>
                    ))}
                </select>
              </div>
              <div className={'flex w-full justify-end'}>
                <Button
                  setting={{
                    text: {
                      style: 'px-3',
                      value: 'next part',
                    },
                    styleButton:
                      '' +
                      `${currentPart >= (parts?.length ?? 0) ? 'hidden' : ''}`,
                    eventButton: () => {
                      if (currentPart >= (parts?.length ?? 0)) return;

                      const nextPart = currentPart + 1;
                      setCurrentPart(nextPart);
                    },
                  }}
                />
              </div>
            </div>
            <div className={'flex flex-col'}>
              <div className={'py-4 flex w-full'}>
                <Message
                  valueComment={''}
                  handleChange={() => {}}
                  handleSubmit={() => {}}
                />
              </div>
              {
                <Comments
                  key={1}
                  comment={{
                    id: 0,
                    name: 'hoho',
                    comment: 'hoho welcome to the club sukina-sedai user!!',
                    dateComment: '12.11.2024',
                  }}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
