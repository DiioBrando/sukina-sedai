import Image from 'next/image';
import React from 'react';
import { ISettingAnimeCard } from '@/entities/IAnimeArray';
import { Tags } from '@/features/sedai-services/components/Tags';
import Link from "next/link";

export const AnimeCard: React.FC<ISettingAnimeCard> = ({ animeObjectArray }) => {
    return (
        animeObjectArray.map((item) =>
        <div key={item.id} className={'flex flex-col flex-1 w-full h-full min-h-80 max-h-[360px] min-w-[200px] max-w-[250px] gap-1.5 pb-2'}>
            <Link href={`/${item.amineName}`}>
            <Image className={'rounded-md border-2'} width={250} height={250} src={''} alt={''}/>
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
        </div>
        )
    );
}