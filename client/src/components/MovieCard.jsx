import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66'>
            <img
                onClick={() => { navigate(`/movies/${movie._id}`); scrollTo(0, 0); }}
                src={movie.image}
                alt={movie.title}
                className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer'
            />
            <p className='font-semibold mt-2 truncate'>{movie.title}</p>
            <p className='text-sm text-gray-400 mt-2'>
                {movie.year} • {movie.duration}
            </p>
            <div className='flex items-center justify-between mt-4 pb-3'>
                <button
                    onClick={() => { navigate(`/movies/${movie._id}`); scrollTo(0, 0); }}
                    className='px-6 py-3 text-base bg-red-500 text-white hover:bg-red-400 transition rounded-full font-semibold shadow-lg'>
                    Buy Tickets
                </button>
                <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
                    ⭐ {movie.rating}
                </p>
            </div>
        </div>
    )
}

export default MovieCard