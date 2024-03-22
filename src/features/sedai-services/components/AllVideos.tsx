import { Content } from '@/features/sedai-services/components/Content';
import Image from "next/image";
import {AnimeCard} from "@/features/sedai-services/components/AnimeCard";

export const AllVideos = () => {
    return(
        <Content>
            <div className={`flex flex-wrap overflow-y-auto overflow-hidden max-w-max w-full pb-20 px-5 max-h-[100vh] gap-2`}>
                <AnimeCard AnimeObjectArray={''}/>
                <AnimeCard AnimeObjectArray={''}/>
                <AnimeCard AnimeObjectArray={''}/>
                <AnimeCard AnimeObjectArray={''}/>
                <AnimeCard AnimeObjectArray={''}/>
            </div>
        </Content>
    )
}