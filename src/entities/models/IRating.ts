import { ITypeRating } from '@/entities/data/anime-data/model/IAnimeArray';

export interface IAnimeRating {
  ratingName: string;
  maxNumRating: number;
  ratingObject: ITypeRating;
}
