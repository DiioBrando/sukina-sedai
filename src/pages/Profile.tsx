'use client';
import { Content } from '@/features/sedai-services/components/Content';
import { ProfileImage } from '@/features/sedai-services/components/ProfileImage';
import { VideoCard } from '@/features/sedai-services/components/VideoCard';
import {animeArray} from "@/entities/data/anime-data/animeArray";
import {Input} from "@/features/sedai-services/components/Input";
import {Button} from "@/features/sedai-services/components/Button";
import {Search} from "../../public/icons/Search";
import React from "react";
import {Watch} from "../../public/icons/Watch";
import {Viewed} from "../../public/icons/Viewed";
import {Track} from "../../public/icons/Track";
import {Favorite} from "../../public/icons/Favorite";

export const Profile = () => {
    return(
        <Content>
            <div className={'max-h-[100vh] w-full'}>
                <div className={'flex flex-wrap gap-3 items-center max-w-max pb-5 px-4'} >
                    <div>
                        <ProfileImage setting={{
                            width: 70,
                            height: 70,
                            style: 'border-2 border-black',
                            isOnline: {
                                height: 20,
                                width: 20,
                            },
                        }}/>
                    </div>
                    <div className={'flex flex-col'}>
                        <span> name: Marginal Pedro Ivan Obkyrish </span>
                        <span> status user: online </span>
                        <span> unique: user </span>
                    </div>
                </div>
                <div className={'px-4 flex flex-col gap-4'}>
                    <div className={'flex md:max-w-80 w-full'}>
                        <Input input={{
                            placeholder: 'search inventory anime here',
                            style: 'p-1 px-4 border-r-0 rounded-r-none rounded-md flex',
                        }}/>
                        <Button setting={{
                            image: {
                                svgComponent: {
                                    image: <Search/>,
                                    style: 'w-[50px] h-[34px] border-customBorderWhite border flex p-1 rounded-md rounded-l-none',
                                },
                            },
                            styleButton: 'p-0 sm:hover:rounded-l-none'
                        }}/>
                    </div>
                    <div className={'flex gap-2 justify-center md:justify-start'}>
                        <div>
                            <Button setting={{
                                image: {
                                    svgComponent: {
                                        image: <Watch/>,
                                        style: 'w-5 h-5',
                                    },
                                },
                                styleButton: 'p-1',
                                eventButton: () => {},
                            }}/>
                        </div>
                        <div>
                            <Button setting={{
                                image: {
                                    svgComponent: {
                                        image: <Viewed/>,
                                        style: 'w-5 h-5',
                                    },
                                },
                                styleButton: 'p-1',
                                eventButton: () => {},
                            }}/>
                        </div>
                        <div>
                            <Button setting={{
                                image: {
                                    svgComponent: {
                                        image: <Track/>,
                                        style: 'w-5 h-5',
                                    },
                                },
                                styleButton: 'p-1',
                                eventButton: () => {},
                            }}/>
                        </div>
                        <div>
                            <Button setting={{
                                image: {
                                    svgComponent: {
                                        image: <Favorite/>,
                                        style: 'w-5 h-5',
                                    },
                                },
                                styleButton: 'p-1',
                                eventButton: () => {},
                            }}/>
                        </div>
                    </div>
                    <div className={'flex flex-wrap gap-2.5 max-h-[500px] w-full overflow-y-auto justify-center sm:justify-start'}>
                    <VideoCard animeObjectArray={ animeArray.slice(0, 5) }/>
                    </div>
                </div>
            </div>
        </Content>
    );
}