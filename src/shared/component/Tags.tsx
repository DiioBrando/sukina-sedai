import React from 'react';
import { ITags } from '@/entities/models/ITags';

export const Tags: React.FC<ITags> = ({ tag }) => {
  return (
    <span className={'px-1 rounded-full bg-grayTransparent max-w-max text-sm'}>
      {tag}
    </span>
  );
};
