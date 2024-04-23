'use client';
import { Content } from '@/shared/component/Content';
import Link from 'next/link';
import { Tags } from '@/shared/component/Tags';
import { Rating } from '@/shared/component/Rating';
import { Intro } from '@/shared/component/Intro';
import { VideoPlayer } from '@/shared/component/VideoPlayer';
import { Message } from '@/shared/component/Message';
import { Comments } from '@/shared/component/Comments';
import { ChangeEvent, useEffect, useState } from 'react';
import { $api } from '@/entities/data/anime-data/api/api';
import {
  Franchise,
  List,
  Titles,
} from '@/entities/data/anime-data/lib/IAnimeListType';
import { animeArray } from '@/entities/data/anime-data/animeArray';
import { ControlAnime } from '@/shared/component/ControlAnime';
import { Button } from '@/shared/component/Button';
import { Franchises } from '@/shared/component/Franchises';
import { useAppContext } from '@/shared/context/page';

export default function Video({ params }: { params: number }) {
  const { store } = useAppContext();
  const [anime, setAnime] = useState<Titles>();
  const [currentPart, setCurrentPart] = useState<number>(1);
  const [parts, setParts] = useState<List[]>();
  const [franchises, setFranchises] = useState<Franchise[]>();

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
        setFranchises(res.data.franchises);
        setParts(res.data.player.list);
      })
      .catch((e) => console.log(e));
  }, [params]);

  return (
    <Content>
      <div
        className={
          'flex flex-col overflow-y-auto overflow-x-hidden max-h-[93.3vh] pb-10 p-5 w-full'
        }
      >
        <div className={'flex flex-col'}>
          <div
            className={
              'w-full h-full flex flex-col md:flex-row gap-2 p-2 max-w-max'
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
              {!store.isAuth
                ? null
                : anime && <ControlAnime idAnime={anime.id} />}
            </div>
            <div className={'flex flex-col min-w-[200px] h-fit gap-2.5'}>
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
                <div className={'flex flex-col gap-1 px-1'}>
                  <div className={'flex gap-1.5'}>
                    <span>year:</span>
                    <Link
                      href={''}
                      className={
                        'hover:bg-purple-500 hover:rounded-full flex items-center max-w-max max-h-max'
                      }
                    >
                      <span>{anime && anime.season.year}</span>
                    </Link>
                    <span>{anime && anime.season.string}.</span>
                  </div>
                  <div>
                    <span>type: {anime && anime.type.full_string}</span>
                  </div>
                  <div>
                    <span>status: {anime && anime.status.string}.</span>
                  </div>
                  <div>
                    <span>
                      count parts: {parts && parts.length}/
                      {anime && (anime.type.episodes ?? '??')}
                    </span>
                  </div>
                  <div>
                    <div className={'flex flex-wrap gap-1.5'}>
                      <span>sub:</span>
                      {anime &&
                        anime.team.voice.map((item, index) => (
                          <span key={index}>
                            {item}
                            {anime && anime.team.voice.length <= index + 1
                              ? '.'
                              : ','}
                          </span>
                        ))}
                    </div>
                    <div className={'flex flex-wrap gap-1.5'}>
                      <span>timing:</span>
                      {anime &&
                        anime.team.timing.map((item, index) => (
                          <span key={index}>
                            {item}
                            {anime && anime.team.timing.length <= index + 1
                              ? '.'
                              : ','}
                          </span>
                        ))}
                    </div>
                    <div className={'flex flex-wrap gap-1.5'}>
                      <span>translator:</span>
                      {anime &&
                        anime.team.translator.map((item, index) => (
                          <span key={index}>
                            {item}
                            {anime && anime.team.translator.length <= index + 1
                              ? '.'
                              : ','}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'flex flex-wrap py-4 md:px-4'}>
            <h2
              className={
                'w-full text-sm md:text-2xl md:text-center break-words'
              }
            >
              {anime && anime.names.ru}
            </h2>
            <p
              className={
                'w-full text-sm md:text-xl  md:text-center break-words'
              }
            >
              {anime && anime.names.en}
            </p>
            <p className={'text-sm md:text-lg break-words'}>
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
            <div className={'flex p-2.5 flex-wrap justify-center'}>
              <div className={'flex flex-col-reverse gap-2.5'}>
                {franchises &&
                  franchises.map((item) =>
                    item.releases.map((rel) => (
                      <Franchises
                        key={rel.id}
                        id={rel.id}
                        code={rel.code}
                        names={rel.names}
                        ordinal={rel.ordinal}
                        currentId={anime && anime.id}
                      />
                    )),
                  )}
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
}
