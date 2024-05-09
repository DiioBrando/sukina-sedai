import { ProfileImage } from '@/shared/component/ProfileImage';
import React, { useEffect, useState } from 'react';
import { Button } from '@/shared/component/Button';
import CommentService from '@/features/comments/lib/CommentService';
import { IComments } from '@/entities/models/IComments';
import { UpdateComment } from '@/shared/component/UpdateComment';
import { CommentActions } from '@/shared/component/CommentActions';

export const Comments = () => {
  const [comments, setComments] = useState<IComments[]>([]);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  useEffect(() => {
    const comments = CommentService.getAllComment();
    comments.then((res) => setComments(res.data));
  }, []);
  const stampToDate = (timestamp: string) => {
    const dateCreated = {
      timestamp: 0,
      day: 0,
      month: 0,
      year: 0,
      minute: 0,
      hour: 0,

      constructor(timestamp: number) {
        this.timestamp = timestamp;
      },

      setDay(day: number) {
        this.day = day;
      },
      setMonth(month: number) {
        this.month = month;
      },
      setYear(year: number) {
        this.year = year;
      },
      setTime(minute: number) {
        this.minute = minute;
      },

      setHour(hour: number) {
        this.hour = hour;
      },

      setDate() {
        const date = new Date(this.timestamp);
        this.setDay(date.getDate());
        this.setMonth(date.getMonth() + 1);
        this.setYear(date.getFullYear());
        this.setTime(date.getMinutes());
        this.setHour(date.getHours());
      },

      formatDate() {
        return `${this.day < 10 ? '0' + this.day : this.day}.${this.month < 10 ? '0' + this.month : this.month}.${this.year} - ${this.hour < 10 ? '0' + this.hour : this.hour}:${this.minute < 10 ? '0' + this.minute : this.minute}`;
      },
      main() {
        this.setDate();

        return this.formatDate();
      },
    };
    dateCreated.constructor(Number(timestamp));
    return dateCreated.main();
  };
  const handleUpdate = (commentId: string | null) => {
    setEditingCommentId(commentId);
  };
  const handleDelete = (_id: string) => {
    CommentService.deleteComment(_id);
  };

  console.log(comments);

  return (
    comments &&
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
              _id={item._id}
              handleUpdate={handleUpdate}
              comment={item.comment}
            />
          </div>
        ) : (
          <div className={'flex w-full justify-between'}>
            <div className={'flex flex-col'}>
              <div className={'flex items-center gap-1'}>
                <span className={'text-md'}>{item.login}</span>
                <span className={'text-sm text-gray-500'}>
                  {stampToDate(item.timestamp)}
                </span>
                {item.changed ? (
                  <span className={'text-xs text-gray-500'}>(changed)</span>
                ) : (
                  ''
                )}
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
                        value: `Like: ${0}`,
                      },
                    }}
                  />
                  <Button
                    setting={{
                      eventButton: () => {},
                      styleButton: 'flex',
                      text: {
                        style: 'px-2 ',
                        value: `Dislike: ${0}`,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <CommentActions
              _id={item._id}
              currentUserId={item.idUser}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          </div>
        )}
      </div>
    ))
  );
};
