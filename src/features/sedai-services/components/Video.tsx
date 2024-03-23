'use client';
import { Content } from '@/features/sedai-services/components/Content';
import { animeArray } from '@/data/anime-data/animeArray';
import Link from "next/link";
import { Tags } from '@/features/sedai-services/components/Tags';
import { Rating } from '@/features/sedai-services/components/Rating';
import { Intro } from '@/features/sedai-services/components/Intro';
import { VideoPlayer } from '@/features/sedai-services/components/VideoPlayer';
import { Message } from '@/features/sedai-services/components/Message';

export const Video = () => {
    // для теста страницы видео
    const anime = animeArray[0];
    const video = anime.animeSeason.flatMap((item) => item.videos.filter((video) => video.idVideo === 1).map(it => it));
    return(
        <Content>
            <div className={'flex flex-col overflow-y-auto overflow-hidden pb-20 px-5 max-h-[100vh] w-full'}>
                <div className={'flex flex-col'}>
                    <div className={'w-full h-full flex flex-col sm:flex-row gap-2 p-2 max-w-max'}>
                        <div className={'max-w-[300px] min-w-[200px] h-fit'}>
                            <Intro className={'rounded-md'} id={anime.id} introName={anime.introName} width={300} height={300}
                                   ratingKinopoisk={anime.ratingKinopoisk} ratingIMDb={anime.ratingIMDb}/>
                        </div>
                        <div className={'flex flex-col min-w-[200px] h-fit'}>
                            <div className={'max-w-max h-fit'}>
                                <h1 className={'text-xl'}>{anime.amineName}</h1>
                                <p className={'text-sm'}>{anime.amineName}</p>
                                <div className={'flex flex-wrap gap-1 md:gap-0.5 py-2'}>
                                    {anime.tags.map((tag) =>
                                        <Link key={tag.idTag}
                                              className={'hover:bg-purple-500 hover:rounded-full flex items-center max-w-max max-h-max'}
                                              href={''}>
                                            <Tags tag={tag.nameTag}/>
                                        </Link>
                                    )}
                                </div>
                                <div className={'flex flex-col gap-1'}>
                                    <Link href={''}
                                          className={'hover:bg-purple-500 hover:rounded-full flex items-center max-w-max max-h-max'}>
                                        <span className={'px-1'}>{anime.data.year}</span>
                                    </Link>
                                    <Link href={''}
                                          className={'hover:bg-purple-500 hover:rounded-full flex items-center max-w-max max-h-max'}>
                                        <span className={'px-1'}>{anime.outputStatus}</span>
                                    </Link>
                                    <Link href={''}
                                          className={'hover:bg-purple-500 hover:rounded-full flex items-center max-w-max max-h-max'}>
                                        <span className={'px-1'}>{anime.studio}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-wrap md:justify-center gap-2 p-4'}>
                            <Rating ratingName={'the plot'}/>
                            <Rating ratingName={'characters'}/>
                            <Rating ratingName={'drawing'}/>
                    </div>
                    <div className={'flex flex-wrap p-2'}>
                        <h2 className={'w-full text-xl md:text-2xl  lg:text-center'}>Title: {anime.amineName}</h2>
                        <p className={'text-md md:text-lg'}>{anime.animeSeason.map((item) => item.titleAnime)}</p>
                    </div>
                </div>
                <div className={'w-full h-full flex flex-col justify-center items-center'}>
                    <VideoPlayer video={video[0]}/>
                    <div className={'flex w-full'}>
                        <div className={'py-4 flex w-full'}>
                        <Message/>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}