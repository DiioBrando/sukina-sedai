import React from 'react';
import Image from 'next/image';
import { IPersonImage } from '@/entities/models/ISettingPersonImage';

export const ProfileImage: React.FC<IPersonImage> = ({ setting }) => {
  return (
    <div className={'relative'}>
      <Image
        width={setting?.width ?? 40}
        height={setting?.height ?? 40}
        className={(setting?.style ?? '') + ' rounded-full p-0.5'}
        src={`/avatars/${setting?.avatar ?? 'ProfileIcon'}.${setting?.formatPic ?? 'png'}`}
        alt={setting?.altPic ?? ''}
        priority={true}
      />
    </div>
  );
};
