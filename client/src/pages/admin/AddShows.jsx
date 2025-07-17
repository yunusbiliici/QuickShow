import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { dummyShowsData } from '../../assets/assets';
import Title from '../../components/admin/Title';
import { CheckIcon, DeleteIcon, StarIcon } from 'lucide-react';
import { kConvertor } from '../../lib/kConverter';

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
    const handleDateTimeAdd = () => {
        if (!dateTimeInput) return;
        const [date, time] = dateTimeInput.split("T");
        if (!date || !time) return;

        setDateTimeSelection((prev) => {
            const times = prev[date] || [];
            if (!times.includes(time)) {
                return { ...prev, [date]: [...times, time] };
            }
            return prev;
        })

    }



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
                            className={`relative max-w-40 cursor-pointer group-hover:not-hover:opacity-40 hover:translate-y-1 transition duration-300`} onClick={() => setSelectedMovie(movie.id)}
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
                                        {typeof kConvertor === 'number' ? kConvertor : 0} Votes
                                    </p>
                                </div>
                            </div>
                            {selectedMovie === movie.id && (
                                <div className='absolute top-2 right-2 flex items-center justify-center bg-red-500 h-6 w-6 rounded'>
                                    <CheckIcon className='w-4 h-4 text-white' strokeWidth={2.5} />

                                </div>

                            )}
                            <p className='font-medium truncate'>{movie.title}</p>
                            <p className='text-gray-400 text-sm'>{movie.release_date}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/*Show Price Input */}
            <div className='mt-8'>
                <label className='block text-sm font-medium mb-2'>Show Price</label>
                <div className='inline-flex items-center gap-2 border
border-gray-600 px-3 py-2 rounded-md'>
                    <p className='text-gray-400 text-sm'>{currency}</p>
                    <input min={0} type='number' value={showPrice} onChange={(e) => setShowPrice(e.target.value)} placeholder='Enter show Price' className='outline-none' />
                </div>
            </div>
            {/*Date & Time Selection*/}
            <div className='mt-6'>
                <label className='block text-sm font-medium mb-2'>Select Date and Time</label>
                <div className='inline-flex gap-5 border border-gray-600 p-1 pl-3 rounded-lg'>
                    <input type="datetime-local" value={dateTimeInput} onChange={(e) => setDateTimeInput(e.target.value)}
                        className='outline-none rounded-md' />
                    <button onClick={handleDateTimeAdd} className='bg-red-500/80 text-white px-3 py-2 text-sm rounded-lg hover:bg-red-500 cursor-pointer'>Add Time</button>
                </div>
            </div>
            {/*Display Selected Times*/}
            {Object.keys(dateTimeSelection).length > 0 && (
                <div className='mt-6'>
                    <h2 className='mb-2'>Selected Date-Time</h2>
                    <ul className='space-y-3'>
                        {Object.entries(dateTimeSelection).map(([date, times]) => (
                            <li key={date}>
                                <div className='font-medium'>{date}</div>
                                <div className='flex flex-wrap gap-2 mt-1 text-sm'>
                                    {times.map((time) => (
                                        <div key={time} className='border
                                border-red-500 px-2 py-1 flex items-center rounded'>
                                            <span>{time}</span>
                                            <DeleteIcon onClick={() =>
                                                handleRemoveTime(date, time)} width={15}
                                                className='ml-2 text-red-500 hover:text-red-700 cursour-pointer' />
                                        </div>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <button className='bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-colors duration-200'>
                Add Show</button>
        </>
    ) : (
        <Loading />
    );
};

export default AddShows;
