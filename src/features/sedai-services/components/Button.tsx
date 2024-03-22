import { Setting } from '@/entities/IButtonSetting';
import React from 'react';
import Image from "next/image";

export const Button: React.FC<Setting> = ({ setting }) => {
    const renderImage = () => {
        if (!setting.image) return null;

        const { imagePath, svgComponent } = setting.image;

       return imagePath?(
           <Image
               width={imagePath.width}
               height={imagePath.height}
               className={imagePath.style}
               src={`/icons/${imagePath.src}.${imagePath.formatPicture}`}
               alt={imagePath.alt ?? ''}/>)
           :
           (<p className={svgComponent.style ?? ''}>{svgComponent.image}</p>);
    };

    return (
        <button
            value={setting.value ?? ''}
            onClick={setting.eventButton ?? (() => {})}
            onChange={setting.onChange ?? (() => {})}
            className={(setting.styleButton ?? '') + ' hover:bg-grayTransparent hover:rounded-lg'}
        >
            {setting.text ?? ''}
            {renderImage()}
        </button>
    );
}
