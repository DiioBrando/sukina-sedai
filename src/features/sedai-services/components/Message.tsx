import { Button } from '@/features/sedai-services/components/Button';
import { SendArrow } from '../../../../public/icons/SendArrow';

export const Message = () => {
    return(
        <div className={'flex flex-col w-full h-full'}>
           <p className={'pb-4'}>
               <textarea
                className={'w-full h-[200px] border border-black rounded-md'}
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
            }}/>
        </div>
    );
}