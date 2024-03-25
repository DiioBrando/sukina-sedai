import { ITypeRating } from '@/entities/IAnimeArray';


export interface IAnimeRating {
    ratingName: string;
    maxNumRating: number;
    ratingObject: ITypeRating;
}