import { Button } from '@/shared/components/Button';
import { SendArrow } from '../../../public/icons/SendArrow';
import React, { ChangeEvent, useState } from 'react';
import CommentService from '@/features/comments/lib/CommentService';
import { useAppContext } from '@/shared/context/page';

export const Message = ({ animeId }: { animeId: string }) => {
  const { useStore } = useAppContext();
  const { user } = useStore((state) => ({
    ...state,
    user: state.user,
  }));
  const [value, setValue] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (value.length !== 0 && value.length <= 200) {
      CommentService.addComment(user.id, animeId, value);
      setValue('');
    }
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
