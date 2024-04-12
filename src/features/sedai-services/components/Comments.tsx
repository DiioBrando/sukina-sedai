import { ProfileImage } from '@/features/sedai-services/components/ProfileImage';
import React, { useState } from 'react';
import { Button } from '@/features/sedai-services/components/Button';
import { IComment } from '@/entities/IComment';

export const Comments: React.FC<IComment> = ({ comment }) => {
  const [grade, setGrade] = useState({
    stateLike: {
      status: false,
      style: '',
    },
    stateDislike: {
      status: false,
      style: '',
    },
    like: 0,
    dislike: 0,
  });
  const handleLike = () => {
    if (grade.stateLike.status) {
      setGrade({
        ...grade,
        like: grade.like - 1,
        stateLike: {
          status: false,
          style: '',
        },
      });
    } else {
      setGrade({
        ...grade,
        like: grade.like + 1,
        stateLike: {
          status: true,
          style: 'bg-grayTransparent rounded-lg',
        },
      });
    }
  };
  const handleDislike = () => {
    if (grade.stateDislike.status) {
      setGrade({
        ...grade,
        dislike: grade.dislike - 1,
        stateDislike: {
          status: false,
          style: '',
        },
      });
    } else {
      setGrade({
        ...grade,
        dislike: grade.dislike + 1,
        stateDislike: {
          status: true,
          style: 'bg-grayTransparent rounded-lg',
        },
      });
    }
  };
  return (
    <div className={'flex gap-2 py-2'}>
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
      <div className={'flex flex-col'}>
        <div className={'flex items-center gap-1'}>
          <span className={'text-md'}>{comment.name}</span>
          <span className={'text-sm text-gray-500'}>{comment.dateComment}</span>
        </div>
        <div className={'flex flex-wrap'}>
          <p className={'text-wrap break-all'}>{comment.comment}</p>
        </div>
        <div className={'flex gap-2.5'}>
          <div className={'flex gap-1'}>
            <Button
              setting={{
                eventButton: handleLike,
                styleButton: 'flex',
                text: {
                  style: 'px-2 ' + grade.stateLike.style,
                  value: `Like: ${grade.like}`,
                },
              }}
            />
            <Button
              setting={{
                eventButton: handleDislike,
                styleButton: 'flex',
                text: {
                  style: 'px-2 ' + grade.stateDislike.style,
                  value: `Dislike: ${grade.dislike}`,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
