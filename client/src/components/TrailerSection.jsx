import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailerSection = () => {
    // Eğer ilk trailer'da video yoksa örnek bir video göster
    const defaultTrailer = dummyTrailers[0]?.videoUrl
        ? dummyTrailers[0]
        : { videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", image: "" };
    const [currentTrailer, setCurrentTrailer] = useState(defaultTrailer)

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
            <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>
            <div className='relative mt-6'>
                <BlurCircle top='-100px' right='-100px' />
                {currentTrailer?.videoUrl ? (

                    <div className="w-full flex justify-center">
                        <iframe
                            src={currentTrailer.videoUrl}
                            title="YouTube video"
                            width="100%"
                            height="540"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="mx-auto max-w-full bg-black rounded-lg"
                            frameBorder="0"
                        ></iframe>
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full h-[540px] bg-black text-white text-xl">
                        Video bulunamadı
                    </div>
                )}
            </div>
            <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
                {dummyTrailers.map((trailer) => (
                    <div
                        key={trailer.image}
                        className='relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer'
                        onClick={() => setCurrentTrailer(trailer)}
                    >
                        <img src={trailer.image} alt="trailer" className='rounded-lg w-full h-full object-cover brightness-75' />
                        <PlayCircleIcon
                            strokeWidth={1.6}
                            className="absolute top-1/2 left-1/2 w-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrailerSection