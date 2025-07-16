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
        genres: [{ name: 'Adventure' }, { name: 'Science Fiction' }, { name: 'Action' }],
        casts: dummyCastsData
    },
    {
        _id: '3',
        title: 'Spider-Man: No Way Home',
        year: 2021,
        duration: '2h 28m',
        overview: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
        image: 'https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
        rating: 8.2,
        genres: [{ name: 'Action' }, { name: 'Adventure' }, { name: 'Science Fiction' }],
        casts: dummyCastsData
    },
    {
        _id: '4',
        title: 'Black Panther',
        year: 2018,
        duration: '2h 14m',
        overview: 'T’Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country’s past.',
        image: 'https://image.tmdb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
        rating: 7.9,
        genres: [{ name: 'Action' }, { name: 'Adventure' }, { name: 'Science Fiction' }],
        casts: dummyCastsData
    },
]

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

// Panel verisi (örnek olarak boş bırakıldı)
export const dummyDashboardData = {
    // örnek: toplam kullanıcı, toplam rezervasyon vs.
}

// Rezervasyon verisi
export const dummyBookingData = [
    {
        user: "Ali Yılmaz",
        showId: "1",
        date: "2024-08-01",
        time: "13:00",
        seat: "B5",
    },
    {
        user: "Zeynep Demir",
        showId: "2",
        date: "2024-08-02",
        time: "17:00",
        seat: "C2",
    }
]
