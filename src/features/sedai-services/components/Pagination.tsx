import React, { useEffect, useRef } from 'react';
import { IPagination } from "@/entities/IPagination";
import { Button } from "@/features/sedai-services/components/Button";

export const Pagination: React.FC<IPagination> = ({ current, total, onChange }) => {
    const ref = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const element = e.currentTarget as HTMLLIElement;
            const index = Array.prototype.indexOf.call(ref.current?.children, element) + 1;
            onChange(index);
        }
        const list = ref.current;
        if(list) {
            Array.from(list.children)
                .forEach((item: Element) =>
                    (item as HTMLLIElement).addEventListener('click', handleClick));
        }

        return () => {
            if (list) {
                Array.from(list.children).forEach((item: Element) => {
                    (item as HTMLElement).removeEventListener('click', handleClick);
                });
            }
        };
    }, [onChange]);
    return(
        <ul className={'flex gap-4'} ref={ref}>
            {Array.from({ length: total + 1 }, (_v, k) => k > 0 && <li key={k} >
                <Button setting={{
                    text: String(k),
                    styleButton: (current === k? 'bg-grayTransparent rounded-md': '') + ' p-2 px-4',
                }}/>
            </li>)}
        </ul>
    );
}