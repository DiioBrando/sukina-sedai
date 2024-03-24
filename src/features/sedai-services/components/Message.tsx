import { Button } from '@/features/sedai-services/components/Button';
import { SendArrow } from '../../../../public/icons/SendArrow';
import React, {ChangeEvent, useState} from "react";
import {IMessage} from "@/entities/IMessage";
import {IComments} from "@/entities/IAnimeArray";

export const Message: React.FC<IMessage> = ({ valueComment, handleChange, handleSubmit}) => {


    return(
        <div className={'flex flex-col w-full h-full'}>
           <p className={'pb-4'}>
               <textarea
                   value={valueComment}
                   onChange={handleChange}
                className={'w-full h-[100px] border border-black rounded-md p-2'}
                placeholder={'Send here the best comment'}>
               </textarea>
           </p>
            <Button setting={{
                image: {
                    svgComponent: {
                        image: <SendArrow/>,
                        style: 'rotate-90'
                    },
                },
                styleButton: 'max-w-max flex items-center p-1',
                text: 'Send Comment',
                eventButton: handleSubmit,
            }}/>
        </div>
    );
}