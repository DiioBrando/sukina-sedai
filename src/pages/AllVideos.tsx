'use client';
import { Content } from '@/features/sedai-services/components/Content';
import { VideoCard } from '@/features/sedai-services/components/VideoCard';
import { animeArray } from '@/entities/data/anime-data/animeArray';
import { Pagination } from "@/features/sedai-services/components/Pagination";
import {useState} from "react";

export const AllVideos = () => {
    const [page, setPage] = useState(1);
    const onChange = (e: number) => {
        setPage(e);
    }

    return(
        <Content>
            <div
                className={'flex flex-wrap overflow-y-auto overflow-hidden pb-20 px-5 w-full max-h-[100vh] justify-center sm:justify-start gap-2'}>
                <VideoCard animeObjectArray={animeArray}/>
                <div className={'flex items-center justify-center w-full'}>
                    <Pagination current={page} total={5} onChange={onChange}/>
                </div>
            </div>
        </Content>
    )
}