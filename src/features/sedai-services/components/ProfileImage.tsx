import React from 'react';
import Image from 'next/image';
import { IPersonImage } from '@/entities/user/lib/ISettingPersonImage';

export const ProfileImage: React.FC<IPersonImage> = ({ setting }) => {
    return(
        <div className={'relative'}>
            <Image width={setting?.width ?? 40} height={setting?.height ?? 40}
                   className={(setting?.style ?? '') + ' rounded-full p-0.5'}
                   src={`/avatars/${setting?.avatar ?? 'ProfileIcon'}.${setting?.formatPic ?? 'png'}`}
                   alt={setting?.altPic ?? ''}
                   priority={true}
            />
            <span className={`bg-green-500 border-white rounded-full w-[${setting?.isOnline?.width ?? 5}px] h-[${setting?.isOnline?.height ?? 5}px] absolute bottom-0 right-1 border-2 p-1`}></span>
        </div>
    );
}