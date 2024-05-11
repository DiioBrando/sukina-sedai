'use client';
import { Content } from '@/shared/component/Content';
import { VideoCard } from '@/shared/component/VideoCard';
import { Pagination } from '@/shared/component/Pagination';
import { useEffect } from 'react';
import { AnimeList } from '@/entities/data/anime-data/lib/IAnimeListType';
import { $api } from '@/entities/data/anime-data/api/api';
import { useAnimeStore } from '@/shared/store/store';
import { Loader } from '@/shared/component/Loader';

export default function AllVideos() {
  const pagination = useAnimeStore((state) => state.pagination);
  const titles = useAnimeStore((state) => state.list);
  const isLoad = useAnimeStore((state) => state.isLoad);

  const onChange = (e: number) => {
    useAnimeStore.setState((state) => ({
      pagination: {
        ...state.pagination,
        current_page: e,
      },
    }));
  };

  useEffect(() => {
    const getAnime = async () =>
      await $api.get<AnimeList>('/title/updates', {
        params: {
          page: pagination.current_page,
          items_per_page: pagination.items_per_page,
        },
      });
    getAnime()
      .then((response) => {
        useAnimeStore.setState((state) => ({
          list: response.data.list,
        }));
        useAnimeStore.setState((state) => ({
          pagination: {
            ...state.pagination,
            current_page: response.data.pagination.current_page,
            pages: response.data.pagination.pages,
            items_per_page: response.data.pagination.items_per_page,
            total_items: response.data.pagination.total_items,
          },
          isLoad: false,
        }));
      })
      .catch((e) => console.log(e));
  }, [pagination.current_page, pagination.items_per_page]);

  return (
    <Content>
      {isLoad ? (
        <div className={'flex w-full justify-center items-center'}>
          <Loader />
        </div>
      ) : (
        <div
          className={
            'flex flex-wrap max-h-[93.3vh] overflow-y-auto overflow-x-hidden p-5 pb-10 justify-center sm:justify-start gap-2'
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
      )}
    </Content>
  );
}
