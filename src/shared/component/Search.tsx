import React, { ChangeEvent, useState } from 'react';
import { $api } from '@/entities/data/anime-data/api/api';
import { useAnimeStore } from '@/shared/store';
import { Input } from '@/shared/component/Input';
import { Button } from '@/shared/component/Button';
import { SearchSvg } from '../../../public/icons/SearchSvg';
import Link from 'next/link';

export const Search = () => {
  const [valueSearch, setSearch] = useState<string>('');
  const handleSearch = async () => {
    if (!!valueSearch) {
      await $api
        .get('/title/search', {
          params: {
            search: valueSearch,
          },
        })
        .then((res) => {
          useAnimeStore.setState((state) => ({
            list: res.data.list,
            pagination: {
              ...state.pagination,
              current_page: 1,
              items_per_page: 20,
            },
          }));
        });
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
          style: 'p-1 px-4 border-r-0 rounded-r-none rounded-md',
          onChange: onChange,
          value: valueSearch,
        }}
      />
      <Link className={'w-[39px] h-[39px] flex'} href={'/'}>
        <Button
          setting={{
            image: {
              svgComponent: {
                image: <SearchSvg />,
                style:
                  'border-customBorderWhite border flex p-1 rounded-md rounded-l-none',
              },
            },
            eventButton: handleSearch,
            styleButton: 'p-0 sm:hover:rounded-l-none',
          }}
        />
      </Link>
    </div>
  );
};
