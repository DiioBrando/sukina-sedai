'use client';
import React from 'react';
import ReactPlayer from 'react-player';
import { List } from '@/entities/data/anime-data/lib/IAnimeListType';

export const VideoPlayer: React.FC<List> = ({ hls }) => {
  return (
    <>
      <ReactPlayer
        style={{
          maxHeight: 'max-content',
          background: 'black',
        }}
        height={'100%'}
        width={'100%'}
        url={'https://cache.libria.fun/' + hls.fhd}
        controls={true}
        light={false}
        pip={true}
      />
      <source src={'https://cache.libria.fun/' + hls.fhd} type="video/mp4" />
    </>
  );
};
