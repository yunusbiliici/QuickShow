import React from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
const TrailerSection = () => {

    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])


    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow hidden '>
            <p className='text-gray-300 font-medium text-lg max-w-[960px] 
        mx-auto'>Trailers</p>
            <div>
                <ReactPlayer>

                </ReactPlayer>

            </div>




        </div>
    )
}

export default TrailerSection