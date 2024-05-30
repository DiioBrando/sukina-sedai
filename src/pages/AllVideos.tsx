'use client';
import { Content } from '@/shared/components/Content';
import { VideoCard } from '@/shared/components/VideoCard';
import { Pagination } from '@/shared/components/Pagination';
import { useAnimeStore } from '@/shared/stores/AnimeStore';
import { Loader } from '@/shared/components/Loader';
import { useEffect } from 'react';

export default function AllVideos() {
  const [getAnime, titles, isLoad, isSearch, pagination, onChangePage] =
    useAnimeStore((state) => [
      state.getTitles,
      state.list,
      state.isLoad,
      state.isSearch,
      state.pagination,
      state.onChangePage,
    ]);

  useEffect(() => {
    if (!isSearch) {
      getAnime();
    }
  }, [getAnime, isSearch]);

  return (
    <Content>
      {isLoad ? (
        <div className={'flex w-full justify-center items-center'}>
          <Loader />
        </div>
      ) : (
        <div
          className={
            'flex flex-wrap max-h-[93.3vh] overflow-y-auto overflow-x-hidden py-5 px-2 sm:px-5 pb-10 justify-center sm:justify-start gap-2'
          }
        >
          {titles && <VideoCard list={titles} />}
          {!isSearch ? (
            <div
              className={'flex items-center justify-center h-fit w-full p-2'}
            >
              <Pagination
                current={pagination.current_page}
                pagePerItems={pagination.items_per_page}
                total={pagination.pages}
                onChange={onChangePage}
              />
            </div>
          ) : null}
        </div>
      )}
    </Content>
  );
}
