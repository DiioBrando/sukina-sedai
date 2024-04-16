import { Button } from '@/shared/component/Button';
import { SendArrow } from '../../../public/icons/SendArrow';
import React from 'react';
import { IMessage } from '@/entities/models/IMessage';

export const Message: React.FC<IMessage> = ({
  valueComment,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className={'flex flex-col w-full h-full'}>
      <p className={'pb-4'}>
        <textarea
          value={valueComment}
          onChange={handleChange}
          className={'w-full h-[100px] border border-black rounded-md p-2'}
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
