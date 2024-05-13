import React, { ChangeEvent } from 'react';

export interface ImageSetting {
  svgComponent?: {
    image?: React.ReactNode;
    style?: string;
  };
  imagePath?: {
    src?: string;
    formatPicture?: string;
    width?: number;
    height?: number;
    style?: string;
    alt?: string;
  };
}

export interface IButtonSetting {
  text?: {
    style?: string;
    value?: string;
  };
  value?: string;
  eventButton?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onChange?: () => void;
  image?: ImageSetting;
  styleButton?: string;
}

export interface Setting {
  setting: IButtonSetting;
}
