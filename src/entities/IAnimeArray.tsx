import React from 'react';

// ------ start setting anime-data

export interface IUserRating {
    idUser: number;
    rating: number;
}

export interface IData {
    day?: number;
    month?: number;
    year: number;
}
export interface ITagsItems {
    idTag: number;
    nameTag: string;
}

export interface IVideos {
    idVideo: number;
    name: string;
    date: IData;
}

export interface IAnimeSeason {
    seasonId: number;
    titleAnime: string;
    videos: IVideos[];
}

export interface IAnimeArray {
    id: number;
    amineName: string;
    introComponent: React.ReactNode;
    tags: ITagsItems[];
    animeSeason: IAnimeSeason[];
    favorites: number;
    data: IData;
    ratingIMDb: number;
    ratingKinopoisk: number;
    userRating: IUserRating[];
    outputStatus: string;
}
// ------ end setting anime-data


// ------ start AnimeCard setting

export interface IAnimeObjectArray {
    id: number;
    amineName: string;
    introComponent: React.ReactNode;
    tags: ITagsItems[];
    favorites: number;
    data: IData;
}


export interface ISettingAnimeCard {
    animeObjectArray: IAnimeObjectArray[];
}

// ------ end AnimeCard setting