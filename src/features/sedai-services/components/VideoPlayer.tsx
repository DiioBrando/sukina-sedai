'use client';
import React from 'react';
import ReactPlayer from 'react-player';
import { AnimeEpisodes } from '@/entities/data/anime-data/lib/IAnimeListType';

export const VideoPlayer: React.FC<AnimeEpisodes> = ({
  video,
  currentPart,
}) => {
  const currentEpisode = Object.assign(video[currentPart]);
  const currentVideo = `https://cache.libria.fun/${currentEpisode.hls.fhd}`;
  return (
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
        pip={true}
      />
      <source src={currentVideo} type="video/mp4" />
    </>
  );
};
