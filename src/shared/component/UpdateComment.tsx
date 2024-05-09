import { Input } from '@/shared/component/Input';
import { Button } from '@/shared/component/Button';
import React, { ChangeEvent, FC, useState } from 'react';
import CommentService from '@/features/comments/lib/CommentService';

type IUpdateComment = {
  _id: string;
  handleUpdate: (commentId: string | null) => void;
  comment: string;
};

export const UpdateComment: FC<IUpdateComment> = ({
  _id,
  handleUpdate,
  comment,
}) => {
  const [value, setValue] = useState<string>(comment);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const handleSubmit = (_id: string) => {
    if (value.length !== null && value.length <= 200) {
      CommentService.updateComment(_id, value);
      setValue('');
    }
  };

  return (
    <>
      <Input
        input={{
          type: 'text',
          onChange: handleChange,
          value: value,
          style: 'w-full rounded-md p-2',
          placeholder: 'change comment',
        }}
      />
      <Button
        setting={{
          eventButton: () => handleSubmit(_id),
          styleButton: 'p-1 px-2',
          text: {
            value: 'update',
          },
        }}
      />
      <Button
        setting={{
          styleButton: 'p-1 px-2',
          text: {
            value: 'cancel',
          },
          eventButton: () => handleUpdate(null),
        }}
      />
    </>
  );
};
