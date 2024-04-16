export interface IUserRating {
    idUser: number;
    rating: number;
}

export interface ITypeRating {
    averageRating: number;
    userScore: IUserRating[];
}

export interface IRating {
    thePlot: ITypeRating;
    characters: ITypeRating;
    drawing: ITypeRating;
}

export interface IAnimeArray {
    userRating: IRating;
}