import React, { RefObject } from 'react';
import { Button } from '@/shared/component/Button';

export const Notification = (ref: RefObject<HTMLElement>) => {
  return (
    <section ref={ref} className={'absolute bottom-0 top-10 right-0 z-50'}>
      <div
        className={
          'border border-b-0 rounded-b-none rounded-lg w-60 max-h-72 overflow-hidden bg-white'
        }
      >
        <div className={'flex justify-between'}>
          <Button
            setting={{
              text: {
                value: 'News',
              },
              styleButton:
                'hover:rounded-none border-b-2 w-full flex items-center justify-center p-1',
            }}
          />
          <Button
            setting={{
              text: {
                value: 'Anime',
              },
              styleButton:
                'hover:rounded-none border-b-2 w-full flex items-center justify-center p-1',
            }}
          />
        </div>
      </div>
      <ul
        className={
          'p-4 overflow-hidden overflow-y-auto border border-t-0 rounded-t-none rounded-lg max-h-72 bg-white'
        }
      >
        <p className={'text-lg text-center'}>
          You&apos;re all caught up. What a pro!
        </p>
        <p className={'text-md text-center'}>You have no messages.</p>
      </ul>
    </section>
  );
};
