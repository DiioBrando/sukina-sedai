import React, { ChangeEvent, useState } from 'react';
import { useAnimeStore } from '@/shared/stores/AnimeStore';
import { Input } from '@/shared/components/Input';
import { Button } from '@/shared/components/Button';
import { SearchSvg } from '../../../public/icons/SearchSvg';
import { useRouter } from 'next/navigation';
import { $apiAniLibria } from '@/features/anime/api/api';

export const Search = () => {
  const router = useRouter();
  const [valueSearch, setSearch] = useState<string>('');
  const handleSearch = async () => {
    if (!!valueSearch) {
      await $apiAniLibria
        .get('/title/search', {
          params: {
            search: valueSearch,
          },
        })
        .then((res) => {
          useAnimeStore.setState((state) => ({
            list: res.data.list,
          }));
        });
      router.push('/');
      useAnimeStore.setState((state) => ({
        isSearch: true,
        isLoad: false,
      }));
    }
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  return (
    <div className={'flex items-center'}>
      <Input
        input={{
          placeholder: 'search favorite anime here',
          style:
            'min-w-[115px] min-h-[32px] h-full p-1 px-4 border-r-0 rounded-r-none rounded-md',
          onChange: onChange,
          value: valueSearch,
        }}
      />
      <Button
        setting={{
          image: {
            svgComponent: {
              image: <SearchSvg />,
              style:
                'border-customBorderWhite border flex p-1 rounded-md rounded-l-none w-[34px] h-[34px]',
            },
          },
          eventButton: handleSearch,
          styleButton: 'p-0 sm:hover:rounded-l-none',
        }}
      />
    </div>
  );
};
