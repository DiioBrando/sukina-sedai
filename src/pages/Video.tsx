'use client';
import { Content } from '@/features/sedai-services/components/Content';
import Link from "next/link";
import { Tags } from '@/features/sedai-services/components/Tags';
import { Rating } from '@/features/sedai-services/components/Rating';
import { Intro } from '@/features/sedai-services/components/Intro';
import { VideoPlayer } from '@/features/sedai-services/components/VideoPlayer';
import { Message } from '@/features/sedai-services/components/Message';
import { Comments } from '@/features/sedai-services/components/Comments';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { IUserRating } from "@/entities/IAnimeArray";
import { $api } from "@/entities/data/anime-data/api";
import { Titles } from "@/entities/data/anime-data/IAnimeListType";
import {release} from "node:os";
import { animeArray } from "@/entities/data/anime-data/animeArray";
import { useScrollPage } from "@/shared/custom-hooks/useScrollPage";

export const Video = ({ params }: { params: number }) => {
    // const [comments, setComments] = useState<IComments>({
    //     name: '',
    //     userId: 0,
    //     commentId: '',
    //     comment: '',
    //     dateComment: '',
    // });
    const refElem = useRef<HTMLDivElement>(null);
    const [anime, setAnime] = useState<Titles>();
    /* const date = () => {
        const date = new Date();
        return `
        ${date.getDate()}.${date.getMonth() < 10? '0' + date.getMonth(): date.getMonth()}.${date.getFullYear()}
        - 
        ${(date.getHours() < 10? '0'+ date.getHours(): date.getHours())}:${date.getMinutes() < 10? '0'+ date.getMinutes(): date.getMinutes()}
        `
    }
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if(event.target.value.length !== 0 && event.target.value.length <= 255) {
            setComments({
                ...comments,
                userId: Math.random() * 1000,
                commentId: `${Math.floor(Math.random() * 10000)}`,
                name: '1233',
                comment: event.target.value,
                dateComment: date()
            });
        }
    }
    const handleSubmit = () => {
        if(comments.comment.length !== 0) {
            anime.userComments.push(Object.assign(comments));
        }
        setComments({...comments, comment: ''});
    } */

    useEffect(() => {
        const getAnime = async() => await $api.get('/title', {
            params: {
                id: params,
            }
        });

        getAnime().then(res => {
                setAnime(res.data);
        }).catch(e => console.log(e));

    }, [params]);
    useScrollPage(refElem);

    return(
        <Content>
            <div ref={refElem} className={'flex flex-col overflow-y-auto max-h-[94vh] pb-10 p-5 w-full'}>
                <div className={'flex flex-col'}>
                    <div className={'w-full h-full flex flex-col sm:flex-row gap-2 p-2 max-w-max'}>
                        <div className={'max-w-[300px] min-w-[200px] h-fit'}>
                            <Intro
                                className={'rounded-md'} id={1} introName={anime?.posters.original.url ?? ''} width={300}
                                height={300}
                                ratingKinopoisk={0} ratingIMDb={0}
                            />
                        </div>
                        <div className={'flex flex-col min-w-[200px] h-fit'}>
                            <div className={'max-w-max h-fit'}>
                                <h1 className={'text-xl'}>{anime && anime.names.ru}</h1>
                                <p className={'text-sm'}>{anime && anime.names.en}</p>
                                <div className={'flex flex-wrap gap-1 md:gap-0.5 py-2'}>
                                    {
                                        anime && anime.genres.map((tag) =>
                                            <Link key={tag}  className={'hover:bg-purple-500 hover:rounded-full flex items-center max-w-max max-h-max'} href={''}>
                                                <Tags tag={tag}/>
                                            </Link>
                                        )
                                    }
                                </div>
                                <div className={'flex flex-col gap-1'}>
                                    <Link href={''}
                                          className={'hover:bg-purple-500 hover:rounded-full flex items-center max-w-max max-h-max'}>
                                        <span className={'px-1'}>{anime && anime.season.year}</span>
                                    </Link>
                                    <Link href={''}
                                          className={'hover:bg-purple-500 hover:rounded-full flex items-center max-w-max max-h-max'}>
                                        <span className={'px-1'}>{anime && anime.status.string}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-wrap md:justify-center gap-2 md:p-4'}>
                        <Rating ratingName={'the plot'} maxNumRating={10} ratingObject={animeArray.userRating.thePlot}/>
                        <Rating ratingName={'characters'} maxNumRating={10} ratingObject={animeArray.userRating.characters}/>
                        <Rating ratingName={'drawing'} maxNumRating={10} ratingObject={animeArray.userRating.drawing}/>
                    </div>
                    <div className={'flex flex-wrap py-4 md:px-4'}>
                        <h2 className={'w-full text-xl md:text-2xl  lg:text-center break-words'}>{anime && anime.names.ru}</h2>
                        <p className={'w-full text-lg md:text-xl  lg:text-center break-words'}>{anime && anime.names.en}</p>
                        <p className={'text-md md:text-lg break-words'}>{anime && anime.description}</p>
                    </div>
                </div>
                {/* видеоплеер и комменты */}
            </div>

        </Content>
    );
}