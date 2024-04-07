'use client';
import { Content } from '@/features/sedai-services/components/Content';
import { VideoCard } from '@/features/sedai-services/components/VideoCard';
import { Pagination } from "@/features/sedai-services/components/Pagination";
import { useEffect, useState } from 'react';
import { $api } from "@/entities/data/anime-data/api";
import { AnimeList, IPagination, Titles } from "@/entities/data/anime-data/IAnimeType";



export const AllVideos = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState<IPagination>();
    const [titles, setTitles] = useState<Titles[]>();
    const onChange = (e: number) => {
        setCurrentPage(e);
    }

    useEffect(() => {
        $api.get<AnimeList>('/title/updates', {
            params: {
                page: currentPage,
                playlist_type: 'array',
            }
        }).then(response => {
            setTitles(response.data.list);
            setPagination(response.data.pagination);
        }).catch(e => console.log(e))

    }, [currentPage]);
    console.log(titles)

    return(
        <Content>
            <div className={'flex flex-wrap overflow-y-auto overflow-hidden pb-20 px-5 w-full max-h-[100vh] justify-center sm:justify-start gap-2'}>
                {titles && <VideoCard list={titles}/>}
                <div className={'flex items-center justify-center h-fit w-full'}>
                    <Pagination current={currentPage} total={pagination?.pages} onChange={onChange}/>
                </div>
            </div>
        </Content>
    )
}