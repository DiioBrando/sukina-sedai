'use client';
import { Content } from '@/features/sedai-services/components/Content';
import { VideoCard } from '@/features/sedai-services/components/VideoCard';
import { Pagination } from '@/features/sedai-services/components/Pagination';
import { useEffect, useRef, useState } from 'react';
import {
  AnimeList,
  IPagination,
  Titles,
} from '@/entities/data/anime-data/lib/IAnimeListType';
import { useScrollPage } from '@/shared/custom-hooks/useScrollPage';
import { $api } from '@/entities/data/anime-data/api/api';

export const AllVideos = () => {
  const [pagination, setPagination] = useState<IPagination>({
    pages: 0,
    current_page: 1,
    items_per_page: 10,
    total_items: 0,
  });
  const [titles, setTitles] = useState<Titles[]>();
  const onChange = (e: number) => {
    setPagination({ ...pagination, current_page: e });
  };

  useEffect(() => {
    const getAnime = async () =>
      $api.get<AnimeList>('/title/updates', {
        params: {
          page: pagination.current_page,
          items_per_page: pagination.items_per_page,
        },
      });

    getAnime()
      .then((response) => {
        setTitles(response.data.list);
        setPagination(response.data.pagination);
      })
      .catch((e) => console.log(e));
  }, [pagination.current_page, pagination.items_per_page]);

  return (
    <Content>
      <div
        className={
          'flex flex-wrap max-h-[93.3vh] overflow-y-auto p-5 pb-10 justify-center sm:justify-start gap-2'
        }
      >
        {titles && <VideoCard list={titles} />}
        <div className={'flex items-center justify-center h-fit w-full p-2'}>
          <Pagination
            current={pagination.current_page}
            pagePerItems={pagination.items_per_page}
            total={pagination.pages}
            onChange={onChange}
          />
        </div>
      </div>
    </Content>
  );
};
