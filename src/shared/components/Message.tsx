import { Button } from '@/shared/components/Button';
import { SendArrow } from '../../../public/icons/SendArrow';
import React, { ChangeEvent, useState } from 'react';
import { useCommentStore } from '@/shared/stores/CommentStore';

export const Message = ({ animeId }: { animeId: string }) => {
  const [addComment] = useCommentStore((state) => [state.addComment]);
  const [value, setValue] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = () => {
    addComment(animeId, value);
  };

  return (
    <div className={'flex flex-col w-full h-full'}>
      <p className={'pb-4'}>
        <textarea
          value={value}
          onChange={handleChange}
          className={
            'w-full h-[100px] border border-black rounded-md p-2 dark:bg-slate-900 dark:border-white'
          }
          placeholder={'Send here the best comment'}
        ></textarea>
      </p>
      <Button
        setting={{
          image: {
            svgComponent: {
              image: <SendArrow />,
              style: 'rotate-90',
            },
          },
          styleButton: 'max-w-max flex items-center p-1',
          text: {
            value: 'Send Comment',
          },
          eventButton: handleSubmit,
        }}
      />
    </div>
  );
};
