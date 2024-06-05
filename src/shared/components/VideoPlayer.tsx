'use client';
import React, { ChangeEvent, useState } from 'react';
import ReactPlayer from 'react-player';
import { List } from '@/entities/models/IAnimeListType';

export const VideoPlayer: React.FC<List> = ({
  hls,
  episode,
  preview,
  skips,
}) => {
  const [playback, setPlayback] = useState({
    src: hls.sd,
    quality: 480,
    volume: 100,
  });

  const onChangeQuality = (e: ChangeEvent<HTMLSelectElement>) => {
    const quality = e.currentTarget.value;
    if (hls.fhd.includes(quality)) {
      setPlayback({ ...playback, src: hls.fhd, quality: Number(quality) });
    }
    if (hls.hd.includes(quality)) {
      setPlayback({ ...playback, src: hls.hd, quality: Number(quality) });
    }
    if (hls.sd.includes(quality)) {
      setPlayback({ ...playback, src: hls.sd, quality: Number(quality) });
    }
  };

  return (
    <>
      <ReactPlayer
        style={{
          maxHeight: 'max-content',
          background: 'black',
          margin: '10px',
        }}
        height={'100%'}
        width={'100%'}
        volume={playback.volume}
        url={`https://cache.libria.fun/${playback.src}`}
        controls={true}
        pip={false}
      />
      <select
        className={'dark:bg-slate-700 text-center text-sm rounded-md p-1 px-2'}
        onChange={onChangeQuality}
        defaultValue={playback.quality}
      >
        <option value={480}>480p</option>
        <option value={720}>720p</option>
        <option value={1080}>1080p</option>
      </select>
      <source
        src={`https://cache.libria.fun/${playback.src}`}
        type={'video/mp4'}
      />
    </>
  );
};
