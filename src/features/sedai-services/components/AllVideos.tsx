import { Content } from '@/features/sedai-services/components/Content';
import { VideoCard } from '@/features/sedai-services/components/VideoCard';
import { animeArray } from '@/data/anime-data/animeArray';

export const AllVideos = () => {
    return(
        <Content>
            <div className={'flex flex-wrap overflow-y-auto overflow-hidden pb-20 px-5 w-full max-h-[100vh] justify-center sm:justify-start gap-2'}>
                <VideoCard animeObjectArray={ animeArray }/>
            </div>
        </Content>
    )
}