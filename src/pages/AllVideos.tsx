'use client';
import { Content } from '@/shared/components/Content';
import { VideoCard } from '@/shared/components/VideoCard';
import { Pagination } from '@/shared/components/Pagination';
import { Loader } from '@/shared/components/Loader';
import { GetTitlesLastUpdates } from '@/features/anime/api/getTitlesLastUpdates';
import { useState } from 'react';

export default function AllVideos() {
  const [page, setPage] = useState<number>(1);
  const { data, isFetching, isError } = GetTitlesLastUpdates({
    currentPage: page,
    itemsPerPage: 24,
  });
  const onChangePage = (e: number) => {
    setPage(e);
  };

  return (
    <Content>
      {isFetching ? (
        <div className={'flex w-full justify-center items-center'}>
          <Loader />
        </div>
      ) : (
        <div
          className={
            'flex flex-wrap max-h-[93.3vh] overflow-y-auto overflow-x-hidden py-5 px-2 sm:px-5 pb-10 justify-center sm:justify-start gap-2'
          }
        >
          {data && <VideoCard list={data.list} />}
          {
            <div
              className={'flex items-center justify-center h-fit w-full p-2'}
            >
              <Pagination
                current={data?.pagination.current_page!}
                pagePerItems={data?.pagination.items_per_page!}
                total={data?.pagination.pages!}
                onChange={onChangePage}
              />
            </div>
          }
        </div>
      )}
    </Content>
  );
}
