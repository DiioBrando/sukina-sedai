import { Input } from '@/shared/components/Input';
import { Button } from '@/shared/components/Button';
import React, { ChangeEvent, FC, useState } from 'react';

type IUpdateComment = {
  idComment: string;
  handleChangeEditingCommentId: (commentId: string | null) => void;
  updateComment: (idComment: string, comment: string) => void;
  comment: string;
};

export const UpdateComment: FC<IUpdateComment> = ({
  idComment,
  handleChangeEditingCommentId,
  updateComment,
  comment,
}) => {
  const [value, setValue] = useState<string>(comment);
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const handleAddSubmit = () => {
    if (value.length !== 0 && value.length <= 200) {
      updateComment(idComment, comment);
      setValue('');
    }
  };

  return (
    <>
      <Input
        input={{
          type: 'text',
          onChange: handleChangeValue,
          value: value,
          style: 'w-full rounded-md p-2',
          placeholder: 'change comment',
        }}
      />
      <Button
        setting={{
          eventButton: handleAddSubmit,
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
          eventButton: () => handleChangeEditingCommentId(null),
        }}
      />
    </>
  );
};
