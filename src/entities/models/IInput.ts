import React, { RefObject } from 'react';

export interface IInputValue {
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: string;
  placeholder?: string;
  refObj?: RefObject<HTMLInputElement>;
}

export interface IInput {
  input: IInputValue;
}
