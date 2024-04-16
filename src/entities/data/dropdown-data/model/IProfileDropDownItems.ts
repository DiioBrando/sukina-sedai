import React from 'react';

export interface IProfileDropDownLink {
    id: number;
    name: string;
    linkTo: string;
    svgComponent: React.ReactNode;
}

export interface IProfileDropDownButton {
    id: number;
    name: string;
    eventButton: () => void;
    svgComponent: React.ReactNode;
}
