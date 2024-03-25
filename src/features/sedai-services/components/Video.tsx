'use client';
import { Content } from '@/features/sedai-services/components/Content';
import { animeArray } from '@/data/anime-data/animeArray';
import Link from "next/link";
import { Tags } from '@/features/sedai-services/components/Tags';
import { Rating } from '@/features/sedai-services/components/Rating';
import { Intro } from '@/features/sedai-services/components/Intro';
import { VideoPlayer } from '@/features/sedai-services/components/VideoPlayer';
import { Message } from '@/features/sedai-services/components/Message';
import { Comments } from '@/features/sedai-services/components/Comments';
import { ChangeEvent, useState} from 'react';
import { IComments } from "@/entities/IAnimeArray";

export const Video = ({ params }: {params: number}) => {
    const [comments, setComments] = useState<IComments>({
        name: '',
        userId: 0,
        commentId: '',
        comment: '',
        dateComment: '',
    });
    const anime = animeArray.filter((item) => item.id === Number(params))[0];
    const video = anime.animeSeason[0].videos;
    const date = () => {
        const date = new Date();
        return `
        ${date.getDate()}.${date.getMonth() < 10? '0' + date.getMonth(): date.getMonth()}.${date.getFullYear()}
        - 
        ${(date.getHours() < 10? '0'+ date.getHours(): date.getHours())}:${date.getMinutes() < 10? '0'+ date.getMinutes(): date.getMinutes()}
        `
    }
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if(event.target.value.length !== 0) {
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
    }

    return(
        <Content>
            <div className={'flex flex-col overflow-y-auto overflow-hidden pb-20 px-5 max-h-[100vh] w-full'}>
                <div className={'flex flex-col'}>
                    <div className={'w-full h-full flex flex-col sm:flex-row gap-2 p-2 max-w-max'}>
                        <div className={'max-w-[300px] min-w-[200px] h-fit'}>
                            <Intro className={'rounded-md'} id={anime.id} introName={anime.introName} width={300}
                                   height={300}
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
                        <Rating ratingName={'the plot'} maxNumRating={10} ratingObject={anime.userRating.thePlot}/>
                        <Rating ratingName={'characters'} maxNumRating={10} ratingObject={anime.userRating.characters}/>
                        <Rating ratingName={'drawing'} maxNumRating={10} ratingObject={anime.userRating.drawing}/>
                    </div>
                    <div className={'flex flex-wrap p-4'}>
                        <h2 className={'w-full text-xl md:text-2xl  lg:text-center break-words'}>Title: {anime.amineName}</h2>
                        <p className={'text-md md:text-lg break-words'}>{anime.animeSeason.map((item) => item.titleAnime)}</p>
                    </div>
                </div>
                <div className={'w-full h-full flex flex-col justify-center items-center'}>
                    <VideoPlayer video={video[0]}/>
                </div>
                <div className={'flex flex-col w-full'}>
                    <div className={'py-4 flex w-full'}>
                        <Message valueComment={comments.comment} handleChange={handleChange} handleSubmit={handleSubmit}/>
                    </div>
                    {anime.userComments.map((item) => <Comments key={item.commentId} comment={item}/>)}
                </div>
            </div>
        </Content>
    );
}