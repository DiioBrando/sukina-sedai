import Image from 'next/image';
import React from 'react';
import { ISettingAnimeCard } from '@/entities/IAnimeArray';
import { Tags } from '@/features/sedai-services/components/Tags';
import Link from "next/link";
import {Intro} from "@/features/sedai-services/components/Intro";

export const VideoCard: React.FC<ISettingAnimeCard> = ({ animeObjectArray }) => {
    return (
        animeObjectArray.map((item) =>
        <div key={item.id} className={'flex flex-col flex-1 min-h-80 max-h-[450px] min-w-[200px] max-w-[230px]  h-full gap-1 pb-2'}>
            <Link className={'max-w-[230px]'} href={`/video/${item.id}`}>
                <Intro id={item.id} introName={item.introName} className={'max-h-[300px] rounded-md'} width={230} height={300} ratingKinopoisk={item.ratingKinopoisk} ratingIMDb={item.ratingIMDb}/>
                <div className={'max-w-[250px] flex flex-col gap-1.5 px-0.5'}>
                    <div className={'flex flex-col gap-1'}>
                        <span className={'flex flex-1 text-sm'}>{item.amineName}</span>
                        <span className={'text-xs'}>{item.data.year}</span>
                    </div>
                    <div className={'flex flex-wrap gap-1'}>
                        {item.tags.slice(0, 4).map((tag) => <Tags key={tag.idTag} tag={tag.nameTag}/>)}
                    </div>
                </div>
            </Link>
        </div>)
        );
}