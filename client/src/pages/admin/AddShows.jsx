import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { dummyShowsData } from '../../assets/assets';
import Title from '../../components/admin/Title';
import { StarIcon } from 'lucide-react';

const AddShows = () => {
    const currency = import.meta.env.VITE_CURRENCY;
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [dateTimeSelection, setDateTimeSelection] = useState({});
    const [dateTimeInput, setDateTimeInput] = useState("");
    const [showPrice, setShowPrice] = useState("");

    const fetchNowPlayingMovies = async () => {
        setNowPlayingMovies(dummyShowsData);
    };

    useEffect(() => {
        fetchNowPlayingMovies();
    }, []);

    return nowPlayingMovies.length > 0 ? (
        <>
            <Title text1="Add" text2="Shows" />
            <p className='mt-10 text-lg font-medium'>Now Playing Movies</p>
            <div className='overflow-x-auto pb-4'>
                <div className='group flex flex-wrap gap-4 mt-4 w-max'>
                    {nowPlayingMovies.map((movie) => (
                        <div
                            key={movie._id}
                            className="relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:translate-y-1 transition duration-300"
                        >
                            <div className='relative rounded-lg overflow-hidden'>
                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className='w-full object-cover brightness-90'
                                />
                                <div className='text-sm flex items-center justify-between p-2 bg-black/70 w-full absolute bottom-0 left-0'>
                                    <p className='flex items-center gap-1 text-gray-400'>
                                        <StarIcon className="w-4 h-4" style={{ stroke: 'red' }} />
                                        {typeof movie.vote_average === 'number' ? movie.vote_average.toFixed(1) : 'N/A'}
                                    </p>
                                    <p className='text-gray-300'>
                                        {typeof movie.vote_count === 'number' ? movie.vote_count : 0} Votes
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    ) : (
        <Loading />
    );
};

export default AddShows;
