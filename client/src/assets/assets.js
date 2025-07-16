// Görsel importları
import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

// Ortak görseller objesi
const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile,
}
export default assets

// Trailer verisi
export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/embed/umiKiW4En9g'
    },
]

// Oyuncu bilgileri
const dummyCastsData = [
    { name: "Milla Jovovich", profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
    { name: "Dave Bautista", profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
    { name: "Arly Jover", profile_path: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
    { name: "Amara Okereke", profile_path: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" },
    { name: "Fraser James", profile_path: "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg" },
    { name: "Deirdre Mullins", profile_path: "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg" },
    { name: "Sebastian Stankiewicz", profile_path: "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg" },
    { name: "Tue Lunding", profile_path: "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg" },
    { name: "Jacek Dzisiewicz", profile_path: "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg" },
    { name: "Ian Hanmore", profile_path: "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg" },
    { name: "Eveline Hall", profile_path: "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg" },
    { name: "Kamila Klamut", profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
    { name: "Caoilinn Springall", profile_path: "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg" },
    { name: "Jan Kowalewski", profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
    { name: "Pawel Wysocki", profile_path: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
    { name: "Simon Lööf", profile_path: "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg" },
    { name: "Tomasz Cymerman", profile_path: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" }
]

// Film listesi
export const dummyShowsData = [
  {
    _id: '1',
    title: 'Guardians of the Galaxy',
    year: 2018,
    duration: '2h 8m',
    overview: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
    image: 'https://image.tmdb.org/t/p/original/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
    rating: 8.1,
    vote_average: 8.1,
    vote_count: 1200,  // EKLENDİ
    genres: [{ name: 'Action' }, { name: 'Adventure' }, { name: 'Science Fiction' }],
    casts: dummyCastsData
  },
  {
    _id: '2',
    title: 'Avengers: Endgame',
    year: 2019,
    duration: '3h 2m',
    overview: "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films.",
    image: 'https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
    rating: 8.4,
    vote_average: 8.4,
    vote_count: 1500,  // EKLENDİ
    genres: [{ name: 'Adventure' }, { name: 'Science Fiction' }, { name: 'Action' }],
    casts: dummyCastsData
  },
  // Diğer filmler için de aynı şekilde vote_count ekle
];

// Seans saatleri
export const dummyDateTimeData = {
    "2024-08-01": ["10:00", "13:00", "16:00", "19:00"],
    "2024-08-02": ["11:00", "14:00", "17:00", "20:00"],
    "2024-08-03": ["12:00", "15:00", "18:00", "21:00"],
    "2024-08-04": ["10:30", "13:30", "16:30", "19:30"],
    "2024-08-05": ["11:30", "14:30", "17:30", "20:30"],
    "2024-08-06": ["12:30", "15:30", "18:30", "21:30"],
    "2024-08-07": ["10:00", "13:00", "16:00", "19:00"],
}

// Panel verisi
export const dummyDashboardData = {
    totalBookings: 12,
    totalRevenue: 1200,
    activeShows: [
        {
            _id: "1",
            movie: {
                poster_path: "https://image.tmdb.org/t/p/original/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
                title: "Guardians of the Galaxy",
                vote_average: 8.1,
            },
            showDateTime: "2024-08-01T13:00:00",
            price: 50,
        },
        {
            _id: "2",
            movie: {
                poster_path: "https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
                title: "Avengers: Endgame",
                vote_average: 8.4,
            },
            showDateTime: "2024-08-02T17:00:00",
            price: 60,
        },
    ],
    totalUser: 5,
}

// Rezervasyon verisi
export const dummyBookingData = [
    {
        userName: "Ali Yılmaz",
        movieTitle: "Guardians of the Galaxy",
        showTime: "2024-08-01 13:00",
        seats: ["B5"],
        amount: 50,
    },
    {
        userName: "Zeynep Demir",
        movieTitle: "Avengers: Endgame",
        showTime: "2024-08-02 17:00",
        seats: ["C2"],
        amount: 60,
    },
    {
        userName: "Mehmet Kara",
        movieTitle: "Spider-Man: No Way Home",
        showTime: "2024-08-03 18:00",
        seats: ["D3", "D4"],
        amount: 120,
    },
    {
        userName: "Elif Arslan",
        movieTitle: "Black Panther",
        showTime: "2024-08-04 16:30",
        seats: ["A1"],
        amount: 45,
    },
    {
        userName: "Burak Şahin",
        movieTitle: "Avengers: Endgame",
        showTime: "2024-08-05 20:30",
        seats: ["E5", "E6", "E7"],
        amount: 180,
    },
];
