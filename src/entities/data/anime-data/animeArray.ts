import { IAnimeArray } from '@/entities/data/anime-data/model/IAnimeArray';

export const animeArray: IAnimeArray = {
  userRating: {
    thePlot: {
      averageRating: 0,
      userScore: [
        {
          idUser: 1,
          rating: 4,
        },
      ],
    },
    characters: {
      averageRating: 4.1,
      userScore: [
        {
          idUser: 1,
          rating: 4,
        },
      ],
    },
    drawing: {
      averageRating: 4.5,
      userScore: [
        {
          idUser: 1,
          rating: 4,
        },
      ],
    },
  },
};
