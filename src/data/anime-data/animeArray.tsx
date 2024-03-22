import { IAnimeArray } from '@/entities/IAnimeArray';

export const animeArray: IAnimeArray[] = [
    {
        id: 1,
        amineName: 'Stone Ocean',
        introComponent: 'component',
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
                        date: {
                            day: 2,
                            year: 2021,
                        }
                    },
                    {
                        idVideo: 2,
                        name: 'Prisoner FE40536: Jolyne Cujo',
                        date: {
                            day: 2,
                            year: 2021,
                        }
                    },
                    {
                        idVideo: 3,
                        name: 'Visitor (part 1)',
                        date: {
                            day: 2,
                            year: 2021,
                        }
                    },
                    {
                        idVideo: 4,
                        name: 'Visitor (part 2)',
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
        userRating: [
            {
                idUser: 1,
                rating: 0,
            },
        ],
        outputStatus: 'ended for now',
    },
    {
        id: 2,
        amineName: 'Attack on Titan',
        introComponent: '',
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
                    { idVideo: 1, name: 'To You, in 2000 Years: The Fall of Shiganshina, Part 1', date: { day: 6, year: 2013 } },
                    { idVideo: 2, name: 'That Day: The Fall of Shiganshina, Part 2', date: { day: 6, year: 2013 } },
                    { idVideo: 3, name: 'A Dim Light Amid Despair: Humanity\'s Comeback, Part 1', date: { day: 13, year: 2013 } },
                    { idVideo: 4, name: 'The Night of the Closing Ceremony: Humanity\'s Comeback, Part 2', date: { day: 20, year: 2013 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'Attack on Titan Season 2 continues the story, as the Survey Corps tries to unravel the secrets of the Titans while battling their own inner demons.',
                videos: [
                    { idVideo: 1, name: 'Beast Titan', date: { day: 1, year: 2017 } },
                    { idVideo: 2, name: 'I\'m Home', date: { day: 8, year: 2017 } },
                    { idVideo: 3, name: 'Southwestward', date: { day: 15, year: 2017 } },
                    { idVideo: 4, name: 'Soldier', date: { day: 22, year: 2017 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 1, month: 4, year: 2013 },
        ratingIMDb: 8.9,
        ratingKinopoisk: 8.7,
        userRating: [
            {
                idUser: 1,
                rating: 0,
            },
        ],
        outputStatus: 'ended for now',
    },
    {
        id: 4,
        amineName: 'Death Note',
        introComponent: '',
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
                    { idVideo: 1, name: 'Rebirth', date: { day: 4, year: 2006 } },
                    { idVideo: 2, name: 'Confrontation', date: { day: 11, year: 2006 } },
                    { idVideo: 3, name: 'Dealings', date: { day: 18, year: 2006 } },
                    { idVideo: 4, name: 'Pursuit', date: { day: 25, year: 2006 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'Death Note Season 2 continues the intense battle of wits between Light Yagami and the enigmatic detective L, as the story delves deeper into the consequences of possessing the Death Note.',
                videos: [
                    { idVideo: 1, name: 'Silence', date: { day: 7, year: 2007 } },
                    { idVideo: 2, name: 'Renewal', date: { day: 14, year: 2007 } },
                    { idVideo: 3, name: 'Frenzy', date: { day: 21, year: 2007 } },
                    { idVideo: 4, name: 'Revival', date: { day: 28, year: 2007 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 4, month: 10, year: 2006 },
        ratingIMDb: 9.0,
        ratingKinopoisk: 8.9,
        userRating: [
            { idUser: 1, rating: 0 },
        ],
        outputStatus: 'ended for now',
    },
    {
        id: 5,
        amineName: 'Fullmetal Alchemist: Brotherhood',
        introComponent: '',
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
                    { idVideo: 1, name: 'Fullmetal Alchemist', date: { day: 5, year: 2009 } },
                    { idVideo: 2, name: 'The First Day', date: { day: 12, year: 2009 } },
                    { idVideo: 3, name: 'City of Heresy', date: { day: 19, year: 2009 } },
                    { idVideo: 4, name: 'An Alchemist\'s Anguish', date: { day: 26, year: 2009 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'Fullmetal Alchemist: Brotherhood Season 2 continues the Elric brothers\' journey, delving deeper into the secrets of alchemy and the true nature of the Philosopher\'s Stone.',
                videos: [
                    { idVideo: 1, name: 'Backs in the Distance', date: { day: 5, year: 2010 } },
                    { idVideo: 2, name: 'Girl on the Battlefield', date: { day: 12, year: 2010 } },
                    { idVideo: 3, name: 'Road of Hope', date: { day: 19, year: 2010 } },
                    { idVideo: 4, name: 'Eternal Leave', date: { day: 26, year: 2010 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 5, month: 4, year: 2009 },
        ratingIMDb: 9.1,
        ratingKinopoisk: 8.8,
        userRating: [
            { idUser: 1, rating: 0 },
        ],
        outputStatus: 'ended for now',
    },
    {
        id: 6,
        amineName: 'My Hero Academia',
        introComponent: '',
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
                    { idVideo: 1, name: 'Izuku Midoriya: Origin', date: { day: 3, year: 2016 } },
                    { idVideo: 2, name: 'What It Takes to Be a Hero', date: { day: 10, year: 2016 } },
                    { idVideo: 3, name: 'Roaring Muscles', date: { day: 17, year: 2016 } },
                    { idVideo: 4, name: 'Start Line', date: { day: 24, year: 2016 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'My Hero Academia Season 2 continues Izuku\'s journey as he faces new challenges in his quest to become the greatest hero.',
                videos: [
                    { idVideo: 1, name: 'That\'s the Idea, Ochaco', date: { day: 1, year: 2017 } },
                    { idVideo: 2, name: 'Roaring Sports Festival', date: { day: 8, year: 2017 } },
                    { idVideo: 3, name: 'In Their Own Quirky Ways', date: { day: 15, year: 2017 } },
                    { idVideo: 4, name: 'Strategy, Strategy, Strategy', date: { day: 22, year: 2017 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 3, month: 4, year: 2016 },
        ratingIMDb: 8.5,
        ratingKinopoisk: 8.7,
        userRating: [
            { idUser: 1, rating: 0 },
        ],
        outputStatus: 'ended for now',
    },
    {
        id: 7,
        amineName: 'Tokyo Ghoul',
        introComponent: '',
        tags: [
            { idTag: 2, nameTag: 'Drama' },
            { idTag: 3, nameTag: 'Horror' },
            { idTag: 6, nameTag: 'Thriller' },
            { idTag: 23, nameTag: 'Supernatural' },
        ],
        animeSeason: [
            {
                seasonId: 1,
                titleAnime: 'Tokyo Ghoul follows Ken Kaneki, a college student who becomes a half-ghoul after a chance encounter with one, and must navigate the dangerous world of ghouls while struggling with his own identity.',
                videos: [
                    { idVideo: 1, name: 'Tragedy', date: { day: 4, year: 2014 } },
                    { idVideo: 2, name: 'Incubation', date: { day: 11, year: 2014 } },
                    { idVideo: 3, name: 'Dove', date: { day: 18, year: 2014 } },
                    { idVideo: 4, name: 'Supper', date: { day: 25, year: 2014 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'Tokyo Ghoul Season 2 delves deeper into the conflict between ghouls and humans, as Kaneki faces new challenges and discovers shocking truths about his past.',
                videos: [
                    { idVideo: 1, name: 'New Surge', date: { day: 9, year: 2015 } },
                    { idVideo: 2, name: 'Dancing Flowers', date: { day: 16, year: 2015 } },
                    { idVideo: 3, name: 'Hangman', date: { day: 23, year: 2015 } },
                    { idVideo: 4, name: 'Deeper Layers', date: { day: 30, year: 2015 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 4, month: 7, year: 2014 },
        ratingIMDb: 8.0,
        ratingKinopoisk: 8.3,
        userRating: [
            { idUser: 1, rating: 0 },
        ],
        outputStatus: 'ended for now',
    },
    {
        id: 8,
        amineName: 'Demon Slayer: Kimetsu no Yaiba',
        introComponent: '',
        tags: [
            { idTag: 1, nameTag: 'Action' },
            { idTag: 6, nameTag: 'Thriller' },
            { idTag: 24, nameTag: 'Historical' },
            { idTag: 14, nameTag: 'Shounen' },
        ],
        animeSeason: [
            {
                seasonId: 1,
                titleAnime: 'Demon Slayer: Kimetsu no Yaiba follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered by demons, and his journey to avenge their deaths and cure his sister, who has been turned into a demon.',
                videos: [
                    { idVideo: 1, name: 'Cruelty', date: { day: 6, year: 2019 } },
                    { idVideo: 2, name: 'Trainer Sakonji Urokodaki', date: { day: 13, year: 2019 } },
                    { idVideo: 3, name: 'Sabito and Makomo', date: { day: 20, year: 2019 } },
                    { idVideo: 4, name: 'Final Selection', date: { day: 27, year: 2019 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'Demon Slayer: Kimetsu no Yaiba Season 2 continues Tanjiro\'s quest as he faces stronger demons and learns more about the Demon Slayer Corps.',
                videos: [
                    { idVideo: 1, name: 'Flames', date: { day: 5, year: 2021 } },
                    { idVideo: 2, name: 'Purgatory', date: { day: 12, year: 2021 } },
                    { idVideo: 3, name: 'Pillars', date: { day: 19, year: 2021 } },
                    { idVideo: 4, name: 'The Storm Rages On', date: { day: 26, year: 2021 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 6, month: 4, year: 2019 },
        ratingIMDb: 8.7,
        ratingKinopoisk: 8.8,
        userRating: [
            { idUser: 1, rating: 0 },
        ],
        outputStatus: 'ended for now',
    },
    {
        id: 9,
        amineName: 'One Punch Man',
        introComponent: '',
        tags: [
            { idTag: 1, nameTag: 'Action' },
            { idTag: 25, nameTag: 'Comedy' },
            { idTag: 26, nameTag: 'Parody' },
            { idTag: 27, nameTag: 'Superhero' },
        ],
        animeSeason: [
            {
                seasonId: 1,
                titleAnime: 'One Punch Man follows Saitama, a hero who can defeat any opponent with a single punch, as he seeks a worthy opponent to challenge him.',
                videos: [
                    { idVideo: 1, name: 'The Strongest Man', date: { day: 5, year: 2015 } },
                    { idVideo: 2, name: 'The Lone Cyborg', date: { day: 12, year: 2015 } },
                    { idVideo: 3, name: 'The Obsessive Scientist', date: { day: 19, year: 2015 } },
                    { idVideo: 4, name: 'The Modern Ninja', date: { day: 26, year: 2015 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'One Punch Man Season 2 continues Saitama\'s quest for excitement and recognition as a hero, as new threats emerge to challenge him.',
                videos: [
                    { idVideo: 1, name: 'Return of the Hero', date: { day: 10, year: 2019 } },
                    { idVideo: 2, name: 'Human Monster', date: { day: 17, year: 2019 } },
                    { idVideo: 3, name: 'The Hunt Begins', date: { day: 24, year: 2019 } },
                    { idVideo: 4, name: 'The Metal Bat', date: { day: 31, year: 2019 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 5, month: 10, year: 2015 },
        ratingIMDb: 8.8,
        ratingKinopoisk: 8.7,
        userRating: [
            { idUser: 1, rating: 0 },
        ],
        outputStatus: 'ended for now',
    },
    {
        id: 10,
        amineName: 'Hunter x Hunter',
        introComponent: '',
        tags: [
            { idTag: 1, nameTag: 'Action' },
            { idTag: 9, nameTag: 'Adventure' },
            { idTag: 12, nameTag: 'Super Power' },
            { idTag: 14, nameTag: 'Shounen' },
        ],
        animeSeason: [
            {
                seasonId: 1,
                titleAnime: 'Hunter x Hunter follows Gon Freecss, a young boy who aspires to become a Hunter and find his father, who is also a legendary Hunter.',
                videos: [
                    { idVideo: 1, name: 'Departure x and x Friends', date: { day: 2, year: 2011 } },
                    { idVideo: 2, name: 'Test x of x Tests', date: { day: 9, year: 2011 } },
                    { idVideo: 3, name: 'Rivals x for x Survival', date: { day: 16, year: 2011 } },
                    { idVideo: 4, name: 'Hope x and x Ambition', date: { day: 23, year: 2011 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'Hunter x Hunter Season 2 continues Gon\'s journey as he faces new challenges in his quest to become a Hunter and uncover the secrets of the world.',
                videos: [
                    { idVideo: 1, name: 'Guts x and x Courage', date: { day: 2, year: 2013 } },
                    { idVideo: 2, name: 'Bargain x and x Deal', date: { day: 9, year: 2013 } },
                    { idVideo: 3, name: 'Chasing x and x Waiting', date: { day: 16, year: 2013 } },
                    { idVideo: 4, name: 'Solution x Is x Majority Rules?', date: { day: 23, year: 2013 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 2, month: 10, year: 2011 },
        ratingIMDb: 9.1,
        ratingKinopoisk: 8.9,
        userRating: [
            { idUser: 1, rating: 0 },
        ],
        outputStatus: 'ended for now',
    },
    {
        id: 11,
        amineName: 'Demon Slayer: Kimetsu no Yaiba - Mugen Train Arc',
        introComponent: '',
        tags: [
            { idTag: 1, nameTag: 'Action' },
            { idTag: 28, nameTag: 'Supernatural' },
            { idTag: 29, nameTag: 'Demons' },
            { idTag: 14, nameTag: 'Shounen' },
        ],
        animeSeason: [
            {
                seasonId: 1,
                titleAnime: 'Demon Slayer: Kimetsu no Yaiba - Mugen Train Arc adapts the Mugen Train arc from the manga series, following Tanjiro, Nezuko, and their companions as they board the Infinity Train to investigate a series of disappearances.',
                videos: [
                    { idVideo: 1, name: 'The Flame Hashira, Kyojuro Rengoku', date: { day: 16, year: 2020 } },
                    { idVideo: 2, name: 'The Mugen Train', date: { day: 23, year: 2020 } },
                    { idVideo: 3, name: 'First Mission', date: { day: 30, year: 2020 } },
                    { idVideo: 4, name: 'Settlement', date: { day: 6, year: 2021 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 16, month: 10, year: 2020 },
        ratingIMDb: 8.5,
        ratingKinopoisk: 8.6,
        userRating: [
            { idUser: 1, rating: 0 },
        ],
        outputStatus: 'ended for now',
    },
    {
        id: 12,
        amineName: 'Black Clover',
        introComponent: '',
        tags: [
            { idTag: 1, nameTag: 'Action' },
            { idTag: 12, nameTag: 'Adventure' },
            { idTag: 21, nameTag: 'Super Power' },
            { idTag: 14, nameTag: 'Shounen' },
        ],
        animeSeason: [
            {
                seasonId: 1,
                titleAnime: 'Black Clover follows Asta, a boy born without magic in a world where it is everything, as he strives to become the Wizard King, the strongest mage in the Clover Kingdom.',
                videos: [
                    { idVideo: 1, name: 'Asta and Yuno', date: { day: 3, year: 2017 } },
                    { idVideo: 2, name: 'The Boys\' Promise', date: { day: 10, year: 2017 } },
                    { idVideo: 3, name: 'To the Royal Capital of the Clover Kingdom!', date: { day: 17, year: 2017 } },
                    { idVideo: 4, name: 'The Magic Knights Entrance Exam', date: { day: 24, year: 2017 } },
                ],
            },
            {
                seasonId: 2,
                titleAnime: 'Black Clover Season 2 continues Asta\'s journey as he faces stronger opponents and discovers the true extent of his powers.',
                videos: [
                    { idVideo: 1, name: 'The New Magic Knight Squad Captains\' Meeting', date: { day: 2, year: 2018 } },
                    { idVideo: 2, name: 'A Young Man\'s Vow', date: { day: 9, year: 2018 } },
                    { idVideo: 3, name: 'The Other New Recruit', date: { day: 16, year: 2018 } },
                    { idVideo: 4, name: 'Despair vs. Hope', date: { day: 23, year: 2018 } },
                ],
            },
        ],
        favorites: 0,
        data: { day: 3, month: 10, year: 2017 },
        ratingIMDb: 7.8,
        ratingKinopoisk: 8.0,
        userRating: [
            { idUser: 1, rating: 0 },
        ],
        outputStatus: 'ended for now',
    }

];