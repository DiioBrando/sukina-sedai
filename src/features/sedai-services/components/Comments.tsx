import { ProfileImage } from '@/features/sedai-services/components/ProfileImage';
import { IComment } from '@/entities/IAnimeArray';
import React, { useState } from 'react';
import { Button } from '@/features/sedai-services/components/Button';
import { PersonIcon } from '../../../../public/icons/PersonIcon';

export const Comments: React.FC<IComment> = ({ comment }) => {
    const [grade, setGrade] = useState({
        stateLike: false,
        stateDislike: false,
        like: 0,
        dislike: 0,
    });
    const handleLike = () => {
        if(grade.stateLike) {
            setGrade({...grade, like: grade.like - 1, stateLike: false});
        } else {
            setGrade({...grade, like: grade.like + 1, stateLike: true});
        }
    }
    const handleDislike = () => {
        if(grade.stateDislike) {
            setGrade({...grade, dislike: grade.dislike - 1, stateDislike: false});
        } else {
            setGrade({...grade, dislike: grade.dislike + 1, stateDislike: true});
        }
    }
    return(
            <div className={'flex gap-2 py-2'}>
                <Button setting={{
                    image: {
                        svgComponent: {
                            image: <ProfileImage/>,
                            style: 'min-h-10 min-w-10',
                        },
                    },
                    styleButton: 'p-1 h-fit',
                }}/>
                <div className={'flex flex-col'}>
                    <div className={'flex items-center gap-1'}>
                        <span className={'text-md'}>{comment.name}</span>
                        <span className={'text-sm text-gray-500'}>{comment.dateComment}</span>
                    </div>
                    <div className={'flex flex-wrap'}>
                        <p className={'text-wrap break-all'}>{comment.comment}</p>
                    </div>
                    <div className={'flex gap-2.5'}>
                        <div className={'flex gap-1'}>
                            <Button setting={{
                                eventButton: handleLike,
                                text: `Like: ${grade.like}`,
                            }}/>
                            <Button setting={{
                                eventButton: handleDislike,
                                text: `Dislike: ${grade.dislike}`,
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
    );
}