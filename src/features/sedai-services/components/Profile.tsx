import { Button } from '@/features/sedai-services/components/Button';
import { PersonIcon } from '../../../../public/icons/PersonIcon';
import React from 'react';
import { IHandleChange } from '@/entities/IHandleChange';

export const Profile: React.FC<IHandleChange> = ({ handleChange }) => {
    return(
        <>
               <Button setting={{
                   image: {
                       svgComponent: {
                           image: <PersonIcon/>,
                           style: 'min-h-10 min-w-10'
                       },
                   },
                   eventButton: handleChange,
                   styleButton: 'p-1 h-fit',
               }}/>
        </>
    );
}