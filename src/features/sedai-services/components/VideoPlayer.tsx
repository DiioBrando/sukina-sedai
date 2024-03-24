"use client";
import React from 'react';
import ReactPlayer from 'react-player';
import { IVideo } from '@/entities/IAnimeArray';

export const VideoPlayer: React.FC<IVideo>  = ({ video }) => {
    const currentVideo = `/videos/${video.urlVideo}.mp4`
    return(
        <>
            <ReactPlayer
                style={{
                    maxHeight: 'max-content',
                    background: 'black',
                }}
                height={'100%'}
                width={'100%'}
                url={currentVideo}
                controls={true}
                light={false}
                pip={true}/>
            <source src={currentVideo} type="video/mp4"/>
        </>
    );
}