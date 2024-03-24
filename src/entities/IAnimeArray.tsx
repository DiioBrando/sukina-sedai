import React from 'react';

// ------ start setting anime-data

export interface IRating {
    thePlot: number;
    characters: number;
    drawing: number;
}

export interface IUserRating {
    idUser: number;
    rating: IRating;
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
    urlVideo: string;
    date: IData;
}

export interface IAnimeSeason {
    seasonId: number;
    titleAnime: string;
    videos: IVideos[];
}

export interface IComments {
    name: string;
    userId: number;
    commentId: string;
    comment: string;
    dateComment: string;
    replay: [];
}

export interface IComment {
    comment: IComments;
}

export interface IAnimeArray {
    id: number;
    amineName: string;
    introName: string;
    tags: ITagsItems[];
    animeSeason: IAnimeSeason[];
    favorites: number;
    data: IData;
    ratingIMDb: number;
    ratingKinopoisk: number;
    userRating: IUserRating[];
    outputStatus: string;
    studio: string;
    userComments: IComments[];
}
// ------ end setting anime-data


// ------ start AnimeCard setting

export interface IAnimeObjectArray {
    id: number;
    amineName: string;
    introName: string;
    tags: ITagsItems[];
    animeSeason: IAnimeSeason[];
    favorites: number;
    data: IData;
    ratingIMDb: number;
    ratingKinopoisk: number;
    userRating: IUserRating[];
    outputStatus: string;
    studio: string;
    userComments: IComments[];
}


export interface ISettingAnimeCard {
    animeObjectArray: IAnimeObjectArray[];
}

// ------ end AnimeCard setting


export interface IVideo {
    video: IVideos;
}