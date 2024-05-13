import { Setting } from '@/entities/models/IButtonSetting';
import React from 'react';
import Image from 'next/image';

export const Button: React.FC<Setting> = ({ setting }) => {
  const renderImage = () => {
    const { image } = setting;

    return image?.imagePath ? (
      <Image
        width={image?.imagePath.width}
        height={image?.imagePath.height}
        className={image?.imagePath.style}
        src={`/icons/${image?.imagePath.src}.${image?.imagePath.formatPicture}`}
        alt={image?.imagePath.alt ?? ''}
      />
    ) : (
      <div className={image?.svgComponent?.style ?? ''}>
        {image?.svgComponent?.image ?? ''}
      </div>
    );
  };

  return (
    <button
      value={setting.value ?? ''}
      onClick={setting.eventButton ?? (() => {})}
      onChange={setting.onChange ?? (() => {})}
      className={
        (setting.styleButton ?? '') +
        ' hover:bg-grayTransparent hover:rounded-lg'
      }
    >
      <span className={setting.text?.style ?? ''}>
        {setting.text?.value ?? ''}
      </span>
      {renderImage()}
    </button>
  );
};
