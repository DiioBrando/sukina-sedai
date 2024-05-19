import { IInput } from '@/entities/models/IInput';
import React from 'react';

export const Input: React.FC<IInput> = ({ input }) => {
  return (
    <input
      ref={input.refObj}
      type={input.type ?? 'text'}
      name={input.name ?? ''}
      value={input.value}
      onChange={input.onChange}
      className={
        'border-customBorderWhite border outline-none w-full dark:bg-slate-900 ' +
        (input.style ?? '')
      }
      placeholder={input.placeholder ?? ''}
    />
  );
};
