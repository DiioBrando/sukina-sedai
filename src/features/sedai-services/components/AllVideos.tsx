import { Content } from '@/features/sedai-services/components/Content';
import { AnimeCard } from '@/features/sedai-services/components/AnimeCard';
import { animeArray } from '@/data/anime-data/animeArray';

export const AllVideos = () => {
    return(
        <Content>
            <div className={`flex flex-wrap overflow-y-auto overflow-hidden pb-20 px-5 w-full max-h-[100vh] gap-2 justify-center sm:justify-start`}>
                <AnimeCard animeObjectArray={ animeArray }/>
            </div>
        </Content>
    )
}