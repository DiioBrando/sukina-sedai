import { IRating } from '@/entities/IRating';
import React from 'react';

export const Rating: React.FC<IRating> = ({ ratingName }) => {
    return (
            <div className={'flex gap-2 max-w-max'}>
                <div className={'flex items-center justify-center border rounded-full text-xl w-14 h-14 overflow-hidden'}>
                    <span>0</span>
                </div>
                <div className={'flex flex-col'}>
                    <p className={'text-lg'}>{ratingName}</p>
                    <ul className={'flex gap-1 text-xs text-white'}>
                        <li className={'rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center'}>1</li>
                        <li className={'rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center'}>2</li>
                        <li className={'rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center'}>3</li>
                        <li className={'rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center'}>4</li>
                        <li className={'rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center'}>5</li>
                        <li className={'rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center'}>6</li>
                        <li className={'rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center'}>7</li>
                        <li className={'rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center'}>8</li>
                        <li className={'rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center'}>9</li>
                        <li className={'rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center'}>10</li>
                    </ul>
                </div>
            </div>
    );
}