import { IAnimeArray } from '@/entities/IAnimeArray';

export const animeArray: IAnimeArray[] = [
    {
        id: 1,
        amineName: 'Stone-Ocean',
        introName: 'jojo',
        tags: [
            {
                idTag: 1,
                nameTag: 'Action',
            },
            {
                idTag: 2,
                nameTag: 'Drama',
            },
            {
                idTag: 3,
                nameTag: 'Horror',
            },
            {
                idTag: 4,
                nameTag: 'Fantasy',
            },
            {
                idTag: 5,
                nameTag: 'Mystery',
            },
        ],
        animeSeason: [
            {
                seasonId: 1,
                titleAnime: 'Stone Ocean is the sixth installment in the JoJo\'s Bizarre Adventure manga franchise by Hirohiko Araki. The series was published in Weekly Shonen Jump magazine from January 1, 2000 to April 21, 2003. A total of 158 chapters were released, later collected into 17 manga volumes. The story takes place after Golden Wind.',
                videos: [
                    {
                        idVideo: 1,
                        name: 'Stone ocean',
                        urlVideo: 'Dio',
                        date: {
                            day: 2,
                            year: 2021,
                        }
                    },
                    {
                        idVideo: 2,
                        name: 'Prisoner FE40536: Jolyne Cujo',
                        urlVideo: '',
                        date: {
                            day: 2,
                            year: 2021,
                        }
                    },
                    {
                        idVideo: 3,
                        name: 'Visitor (part 1)',
                        urlVideo: '',
                        date: {
                            day: 2,
                            year: 2021,
                        }
                    },
                    {
                        idVideo: 4,
                        name: 'Visitor (part 2)',
                        urlVideo: '',
                        date: {
                            day: 2,
                            year: 2021,
                        }
                    },
                ],
            },
        ],
        favorites: 0,
        data: {
            day: 21,
            month: 1,
            year: 2021,
        },
        ratingIMDb: 7.12,
        ratingKinopoisk: 6,
        userRating: {
            thePlot: {
                averageRating: 0,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                    {
                        idUser: 2,
                        rating: 6,
                    },
                    {
                        idUser: 3,
                        rating: 9,
                    },
                    {
                        idUser: 4,
                        rating: 8,
                    },
                    {
                        idUser: 5,
                        rating: 7,
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
        outputStatus: 'ended for now',
        studio: 'David Production',
        userComments: [],
    },
    {
        id: 2,
        amineName: 'Attack on Titan',
        introName: 'AttackOnTitan',
        tags: [
            { idTag: 1, nameTag: 'Action' },
            { idTag: 2, nameTag: 'Drama' },
            { idTag: 6, nameTag: 'Thriller' },
            { idTag: 7, nameTag: 'Post-apocalyptic' },
        ],
        animeSeason: [
            {
                seasonId: 1,
                titleAnime: 'Attack on Titan follows humanity settled within three concentric walls to protect themselves from the terrifying titans that prey on them.',
                videos: [
                    { idVideo: 1, name: 'To You, in 2000 Years: The Fall of Shiganshina, Part 1',
                        urlVideo: '',
                        date: { day: 6, year: 2013 } },
                    { idVideo: 2, name: 'That Day: The Fall of Shiganshina, Part 2',
                        urlVideo: '',
                        date: { day: 6, year: 2013 } },
                    { idVideo: 3, name: 'A Dim Light Amid Despair: Humanity\'s Comeback, Part 1',
                        urlVideo: '',
                        date: { day: 13, year: 2013 } },
                    { idVideo: 4, name: 'The Night of the Closing Ceremony: Humanity\'s Comeback, Part 2',
                        urlVideo: '',
                        date: { day: 20, year: 2013 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'Attack on Titan Season 2 continues the story, as the Survey Corps tries to unravel the secrets of the Titans while battling their own inner demons.',
                videos: [
                    { idVideo: 1, name: 'Beast Titan',
                        urlVideo: '',
                        date: { day: 1, year: 2017 } },
                    { idVideo: 2, name: 'I\'m Home',
                        urlVideo: '',
                        date: { day: 8, year: 2017 } },
                    { idVideo: 3, name: 'Southwestward',
                        urlVideo: '',
                        date: { day: 15, year: 2017 } },
                    { idVideo: 4, name: 'Soldier',
                        urlVideo: '',
                        date: { day: 22, year: 2017 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 1, month: 4, year: 2013 },
        ratingIMDb: 8.9,
        ratingKinopoisk: 8.7,
        userRating: {
            thePlot: {
                averageRating: 3.1,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
            characters: {
                averageRating: 6.1,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
            drawing: {
                averageRating: 7.5,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
        },
        outputStatus: 'ended for now',
        studio: '',
        userComments: [],
    },
    {
        id: 3,
        amineName: 'Death Note',
        introName: 'Death',
        tags: [
            { idTag: 2, nameTag: 'Drama' },
            { idTag: 15, nameTag: 'Psychological' },
            { idTag: 16, nameTag: 'Supernatural' },
            { idTag: 17, nameTag: 'Thriller' },
        ],
        animeSeason: [
            {
                seasonId: 1,
                titleAnime: 'Death Note follows the story of Light Yagami, a high school student who discovers a supernatural notebook that allows him to kill anyone by writing the person\'s name while picturing their face.',
                videos: [
                    { idVideo: 1, name: 'Rebirth',
                        urlVideo: '',
                        date: { day: 4, year: 2006 } },
                    { idVideo: 2, name: 'Confrontation',
                        urlVideo: '',
                        date: { day: 11, year: 2006 } },
                    { idVideo: 3, name: 'Dealings',
                        urlVideo: '',
                        date: { day: 18, year: 2006 } },
                    { idVideo: 4, name: 'Pursuit',
                        urlVideo: '',
                        date: { day: 25, year: 2006 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'Death Note Season 2 continues the intense battle of wits between Light Yagami and the enigmatic detective L, as the story delves deeper into the consequences of possessing the Death Note.',
                videos: [
                    { idVideo: 1, name: 'Silence',
                        urlVideo: '',
                        date: { day: 7, year: 2007 } },
                    { idVideo: 2, name: 'Renewal',
                        urlVideo: '',
                        date: { day: 14, year: 2007 } },
                    { idVideo: 3, name: 'Frenzy',
                        urlVideo: '',
                        date: { day: 21, year: 2007 } },
                    { idVideo: 4, name: 'Revival',
                        urlVideo: '',
                        date: { day: 28, year: 2007 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 4, month: 10, year: 2006 },
        ratingIMDb: 9.0,
        ratingKinopoisk: 8.9,
        userRating: {
            thePlot: {
                averageRating: 3.1,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
            characters: {
                averageRating: 7.2,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
            drawing: {
                averageRating: 8.1,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
        },
        outputStatus: 'ended for now',
        studio: '',
        userComments: [],
    },
    {
        id: 4,
        amineName: 'Fullmetal Alchemist: Brotherhood',
        introName: 'FullMetall',
        tags: [
            { idTag: 1, nameTag: 'Action' },
            { idTag: 18, nameTag: 'Adventure' },
            { idTag: 19, nameTag: 'Military' },
            { idTag: 20, nameTag: 'Magic' },
        ],
        animeSeason: [
            {
                seasonId: 1,
                titleAnime: 'Fullmetal Alchemist: Brotherhood follows the Elric brothers, Edward and Alphonse, as they seek the Philosopher\'s Stone to restore their bodies after a failed alchemical experiment.',
                videos: [
                    { idVideo: 1, name: 'Fullmetal Alchemist',
                        urlVideo: '',
                        date: { day: 5, year: 2009 } },
                    { idVideo: 2, name: 'The First Day',
                        urlVideo: '',
                        date: { day: 12, year: 2009 } },
                    { idVideo: 3, name: 'City of Heresy',
                        urlVideo: '',
                        date: { day: 19, year: 2009 } },
                    { idVideo: 4, name: 'An Alchemist\'s Anguish',
                        urlVideo: '',
                        date: { day: 26, year: 2009 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'Fullmetal Alchemist: Brotherhood Season 2 continues the Elric brothers\' journey, delving deeper into the secrets of alchemy and the true nature of the Philosopher\'s Stone.',
                videos: [
                    { idVideo: 1, name: 'Backs in the Distance',
                        urlVideo: '',
                        date: { day: 5, year: 2010 } },
                    { idVideo: 2, name: 'Girl on the Battlefield',
                        urlVideo: '',
                        date: { day: 12, year: 2010 } },
                    { idVideo: 3, name: 'Road of Hope',
                        urlVideo: '',
                        date: { day: 19, year: 2010 } },
                    { idVideo: 4, name: 'Eternal Leave',
                        urlVideo: '',
                        date: { day: 26, year: 2010 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 5, month: 4, year: 2009 },
        ratingIMDb: 9.1,
        ratingKinopoisk: 8.8,
        userRating: {
            thePlot: {
                averageRating: 8.9,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
            characters: {
                averageRating: 7.1,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
            drawing: {
                averageRating: 3.5,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
        },
        outputStatus: 'ended for now',
        studio: '',
        userComments: [],
    },
    {
        id: 5,
        amineName: 'My Hero Academia',
        introName: 'myHeroA',
        tags: [
            { idTag: 1, nameTag: 'Action' },
            { idTag: 21, nameTag: 'Super Power' },
            { idTag: 14, nameTag: 'Shounen' },
            { idTag: 22, nameTag: 'School' },
        ],
        animeSeason: [
            {
                seasonId: 1,
                titleAnime: 'My Hero Academia follows Izuku Midoriya, a boy born without superpowers in a world where they are the norm, but still dreams of becoming a hero himself.',
                videos: [
                    { idVideo: 1, name: 'Izuku Midoriya: Origin',
                        urlVideo: '',
                        date: { day: 3, year: 2016 } },
                    { idVideo: 2, name: 'What It Takes to Be a Hero',
                        urlVideo: '',
                        date: { day: 10, year: 2016 } },
                    { idVideo: 3, name: 'Roaring Muscles',
                        urlVideo: '',
                        date: { day: 17, year: 2016 } },
                    { idVideo: 4, name: 'Start Line',
                        urlVideo: '',
                        date: { day: 24, year: 2016 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'My Hero Academia Season 2 continues Izuku\'s journey as he faces new challenges in his quest to become the greatest hero.',
                videos: [
                    { idVideo: 1, name: 'That\'s the Idea, Ochaco',
                        urlVideo: '',
                        date: { day: 1, year: 2017 } },
                    { idVideo: 2, name: 'Roaring Sports Festival',
                        urlVideo: '',
                        date: { day: 8, year: 2017 } },
                    { idVideo: 3, name: 'In Their Own Quirky Ways',
                        urlVideo: '',
                        date: { day: 15, year: 2017 } },
                    { idVideo: 4, name: 'Strategy, Strategy, Strategy',
                        urlVideo: '',
                        date: { day: 22, year: 2017 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 3, month: 4, year: 2016 },
        ratingIMDb: 8.5,
        ratingKinopoisk: 8.7,
        userRating: {
            thePlot: {
                averageRating: 9.8,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
            characters: {
                averageRating: 5.1,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
            drawing: {
                averageRating: 7.9,
                userScore: [
                    {
                        idUser: 1,
                        rating: 4,
                    },
                ],
            },
        },
        outputStatus: 'ended for now',
        studio: '',
        userComments: [],
    },
];