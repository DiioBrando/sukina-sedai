import React from 'react';

export interface IInputValue {
    type?: string;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: string;
    placeholder?: string;
}

export interface IInput {
    input: IInputValue;
}