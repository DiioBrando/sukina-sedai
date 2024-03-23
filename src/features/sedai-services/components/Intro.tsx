import Image from 'next/image';
import React from 'react';
import { IIntro } from '@/entities/IIntro';

export const Intro: React.FC<IIntro>  = ({ id, introName , width, height, ratingKinopoisk, ratingIMDb, className}) => {
    return(
        <div key={id} className={'relative h-fit max-w-max'}>
            <Image className={className} width={width} height={height} src={`/intro/${introName}.png`} alt={''}/>
            <div className={'absolute bottom-2 right-1 flex gap-2 text-sm'}>
                            <span className={'flex gap-1 rounded-md bg-purple-500 px-1.5 text-white'}>
                                <span>IMDb:</span>
                                <span>{ratingIMDb}</span>
                            </span>
                <span className={'flex gap-1 rounded-md bg-purple-500 px-1.5 text-white'}>
                                <span>Kinopoisk:</span>
                                <span>{ratingKinopoisk}</span>
                            </span>
            </div>
        </div>
    );
}