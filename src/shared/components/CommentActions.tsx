import { Button } from '@/shared/components/Button';
import { ThreeDot } from '../../../public/icons/ThreeDot';
import React, { FC, useRef, useState } from 'react';
import { DropDown } from '@/shared/components/DropDown';
import { useClickOutSide } from '@/shared/lib/hooks/useClickOutSide';
import { useAppContext } from '@/shared/context/page';

type ICommentActions = {
  idComment: string;
  currentUserId: string;
  handleChangeEditingCommentId: (commentId: string | null) => void;
  deleteComment: (_id: string) => void;
};

export const CommentActions: FC<ICommentActions> = ({
  idComment,
  currentUserId,
  handleChangeEditingCommentId,
  deleteComment,
}) => {
  const { useStore } = useAppContext();
  const { idUser, isAuth } = useStore((state) => ({
    ...state,
    idUser: state.user.id,
    isAuth: state.isAuth,
  }));
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleDeleteComment = () => {
    deleteComment(idComment);
  };
  const handleChangeOpen = () => {
    setOpen(!isOpen);
  };
  const refElement = useRef(null);
  useClickOutSide(refElement, () => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  });

  return (
    <div className={'flex flex-col relative'}>
      <Button
        setting={{
          eventButton: handleChangeOpen,
          image: {
            svgComponent: {
              image: <ThreeDot />,
              style: 'w-5 h-5',
            },
          },
          styleButton: 'max-w-max p-2',
        }}
      />
      {isOpen ? (
        <DropDown>
          <div
            className={
              'absolute right-12 border border-black p-2 rounded-md bg-white justify-center flex flex-col min-w-[150px] dark:bg-slate-900 dark:border-white'
            }
            ref={refElement}
          >
            {idUser === currentUserId ? (
              <>
                <Button
                  setting={{
                    styleButton: 'p-1',
                    text: {
                      value: 'update',
                    },
                    eventButton: () => handleChangeEditingCommentId(idComment),
                  }}
                />
                <Button
                  setting={{
                    styleButton: 'p-1',
                    text: {
                      value: 'delete',
                    },
                    eventButton: handleDeleteComment,
                  }}
                />
              </>
            ) : (
              <Button
                setting={{
                  styleButton: 'p-1',
                  text: {
                    value: 'report',
                  },
                }}
              />
            )}
          </div>
        </DropDown>
      ) : null}
    </div>
  );
};
