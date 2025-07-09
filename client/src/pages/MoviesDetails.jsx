import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import BlurCircle from '../components/BlurCircle'
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react'
import DateSelect from '../components/DateSelect'


const MoviesDetails = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  const getShow = async () => {
    const show = dummyShowsData.find(show => show._id === id)
    setShow({
      movie: show,
      dateTime: dummyDateTimeData
    })
  }
  useEffect(() => {
    getShow()
  }, [id])

  const handleBuyTicketsClick = (e) => {
    e.preventDefault();
    document.getElementById('dateSelect')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return show ? (
    <div className='px-6 md:px-16 lg:px-40 pt-32 md:pt-48'>
      <div className='flex max-md:flex-col gap-8 md:gap-12'>
        <img src={show.movie.image} alt={show.movie.title} className='max-md:mx-auto
  rounded-xl h-[416px] max-w-[280px] object-cover'/>

        <div className='relative flex flex-col gap-3'>
          <BlurCircle top="-100px" left="-100px" />
          <p className='font-semibold text-red-500'>ENGLISH</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance'>{show.movie.title}</h1>
          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className="w-5 h-5 text-red-500 fill-red-500" />
            {(show.movie?.rating ?? 0).toFixed(1)} User Rating
          </div>
          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>
            {show.movie?.overview || 'No overview available.'}
          </p>
          <p>
            {show.movie?.duration ?? 'N/A'} . {(show.movie?.genres ?? []).map(genre => genre.name).join(", ")} . {show.movie?.year ?? 'N/A'}
          </p>
          <div className='flex items-center flex-wrap gap-4 mt-4'>
            <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium
            cursor-pointer active:scale-95'>
              <PlayCircleIcon className='w-5 h-5' />
              Watch Trailer
            </button>
            <a href="#dateSelect" onClick={handleBuyTicketsClick} className='px-10 py-3 text-sm text-white bg-red-500 hover:bg-red-600 transition rounded-md font-medium cursor-pointer
            active:scale-95'>Buy Tickets</a>
            <button>
              <Heart className={'w-5 h-5'} />
            </button>
          </div>
        </div>
      </div>
      <p className='text-lg font-medium mt-20'>Your Favorite Cast</p>
      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='flex items-center gap-4 w-max px-4'>
          {(show.movie?.casts ?? []).slice(0, 12).map((cast, index) => (
            <div key={index} className='flex flex-col items-center text-center'>

              <img src={cast.profile_path} alt="" className='rounded-full
h-20 md:h-20 aspect-square object-cover'/>
              <p className='font-medium text-xs mt-3' >{cast.name}</p>
            </div>

          ))}
        </div>


      </div>
      <DateSelect dateTime={show.dateTime} id={id} />
    </div>

  ) : <div className='flex items-center justify-center h-screen'>
    <h1 className='text-3xl font-bold'>Loading...</h1>
  </div>
}

export default MoviesDetails
