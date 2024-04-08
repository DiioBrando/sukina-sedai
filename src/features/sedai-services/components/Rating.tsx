import { IAnimeRating } from '@/entities/IRating';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const Rating: React.FC<IAnimeRating> = ({ ratingName, maxNumRating, ratingObject}) => {
    const [rating, setRating] = useState(0);
    const refElement = useRef<HTMLUListElement>(null);

    // добавить обработку рейтинга с массива аниме, useRating.
    useLayoutEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const element = e.currentTarget as HTMLLIElement;
            const index = Array.prototype.indexOf.call(refElement.current?.children, element) + 1;
            const result = Number(((rating + index) / ratingObject.userScore.length).toFixed(1));
            setRating(result);
        };

        const list = refElement.current;

        if (list) {
            Array.from(list.children).forEach((item: Element) => {
                (item as HTMLElement).addEventListener('click', handleClick);
            });
        }

        return () => {
            if (list) {
                Array.from(list.children).forEach((item: Element) => {
                    (item as HTMLElement).removeEventListener('click', handleClick);
                });
            }
        };
    }, [rating, ratingObject.userScore]);
    useEffect(() => {
        ratingObject.averageRating = ratingObject.userScore.reduce((acc, cur) => acc + cur.rating, 0) / ratingObject.userScore.length;
        setRating(ratingObject.averageRating);
    }, [ratingObject]);

    return (
            <div className={'flex gap-2 max-w-max'}>
                <div className={'flex items-center justify-center border rounded-full text-xl w-14 h-14 overflow-hidden'}>
                    <span>{rating}</span>
                </div>
                <div className={'flex flex-col'}>
                    <p className={'text-lg'}>{ratingName}</p>
                    <ul ref={refElement} className={'flex gap-1 text-xs text-white'}>
                        {Array.from( { length: maxNumRating },(_v, number) => number + 1).map((item) =>
                        <li key={item} className={'rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center cursor-pointer'}>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
    );
}