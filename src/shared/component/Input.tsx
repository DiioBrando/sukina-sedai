import { IInput } from '@/entities/models/IInput';
import React from 'react';

export const Input: React.FC<IInput> = ({ input }) => {
  return (
    <input
      type={input.type ?? 'text'}
      name={input.name ?? ''}
      value={input.value}
      onChange={input.onChange}
      className={
        'border-customBorderWhite border outline-none w-full ' +
        (input.style ?? '')
      }
      placeholder={input.placeholder ?? ''}
    />
  );
};
