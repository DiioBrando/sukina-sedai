import { ProfileImage } from '@/shared/components/ProfileImage';
import React, { useEffect, useState } from 'react';
import { Button } from '@/shared/components/Button';
import { UpdateComment } from '@/shared/components/UpdateComment';
import { CommentActions } from '@/shared/components/CommentActions';
import { useCommentStore } from '@/shared/stores/CommentStore';
import { convertTimeStampToDate } from '@/shared/lib/helpers/convertTimeStampToDate';

export const Comments = ({ animeId }: { animeId: string }) => {
  const [comments, updateComment, deleteComment, getCommentByAnimeId] =
    useCommentStore((state) => [
      state.comments,
      state.updateComment,
      state.deleteComment,
      state.getCommentByAnimeId,
    ]);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  useEffect(() => {
    getCommentByAnimeId(animeId);
  }, [animeId, getCommentByAnimeId]);

  const handleChangeEditingCommentId = (commentId: string | null) => {
    setEditingCommentId(commentId);
  };

  return !comments.length ? (
    <div>No comments...</div>
  ) : (
    comments.map((item) => (
      <div key={item._id} className={'flex gap-2 py-2'}>
        <Button
          setting={{
            image: {
              svgComponent: {
                image: <ProfileImage />,
                style: 'min-h-10 min-w-10',
              },
            },
            styleButton: 'p-1 h-fit',
          }}
        />

        {editingCommentId === item._id ? (
          <div className={'flex items-center'}>
            <UpdateComment
              idComment={item._id}
              handleChangeEditingCommentId={handleChangeEditingCommentId}
              updateComment={updateComment}
              comment={item.comment}
            />
          </div>
        ) : (
          <div className={'flex w-full justify-between'}>
            <div className={'flex flex-col'}>
              <div className={'flex items-center gap-1'}>
                <span className={'text-md'}>{item.login}</span>
                <div
                  className={'flex flex-col sm:flex-row items-center gap-1.5'}
                >
                  <span className={'text-sm text-gray-500'}>
                    {convertTimeStampToDate(Number(item.timestamp))}
                  </span>
                  {item.changed ? (
                    <span className={'text-xs text-gray-500'}>(changed)</span>
                  ) : null}
                </div>
              </div>
              <div className={'flex flex-wrap'}>
                <p className={'text-wrap break-all'}>{item.comment}</p>
              </div>
              <div className={'flex gap-2.5'}>
                <div className={'flex gap-1'}>
                  <Button
                    setting={{
                      eventButton: () => {},
                      styleButton: 'flex',
                      text: {
                        style: 'px-2 ',
                        value: `Like: ${item.like.length}`,
                      },
                    }}
                  />
                  <Button
                    setting={{
                      eventButton: () => {},
                      styleButton: 'flex',
                      text: {
                        style: 'px-2 ',
                        value: `Dislike: ${item.dislike.length}`,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <CommentActions
              idComment={item._id}
              currentUserId={item.idUser}
              handleChangeEditingCommentId={handleChangeEditingCommentId}
              deleteComment={deleteComment}
            />
          </div>
        )}
      </div>
    ))
  );
};
