import React, { useEffect, useRef } from 'react';
import { Button } from '@/shared/components/Button';
import { ICustomPagination } from '@/entities/models/IAnimeListType';

export const Pagination: React.FC<ICustomPagination> = ({
  current,
  total,
  pagePerItems,
  onChange,
}) => {
  const ref = useRef<HTMLUListElement>(null);
  const lengthPage = Math.ceil(total / pagePerItems) + 1;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const element = e.currentTarget as HTMLLIElement;
      const index =
        Array.prototype.indexOf.call(ref.current?.children, element) + 1;
      onChange(index);
    };
    const list = ref.current;
    if (list) {
      Array.from(list.children).forEach((item: Element) =>
        (item as HTMLLIElement).addEventListener('click', handleClick),
      );
    }

    return () => {
      if (list) {
        Array.from(list.children).forEach((item: Element) => {
          (item as HTMLElement).removeEventListener('click', handleClick);
        });
      }
    };
  }, [onChange]);

  return (
    <ul className={'flex gap-4'} ref={ref}>
      {Array.from(
        { length: lengthPage },
        (_v, k) =>
          k > 0 && (
            <li key={k}>
              <Button
                setting={{
                  text: {
                    value: String(k),
                  },
                  styleButton:
                    (current === k ? 'bg-grayTransparent rounded-md' : '') +
                    ' p-2 px-4',
                }}
              />
            </li>
          ),
      )}
    </ul>
  );
};
