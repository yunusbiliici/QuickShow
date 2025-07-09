import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const DateSelect = ({ dateTime, id }) => {

    const navigate = useNavigate()
    const [selectedDate, setSelectedDate] = useState(null);

    const onBookHandler = () => {
        if (!selectedDate) {
            return toast.error("Please select a date");
        }
        navigate(`/movies/${id}/${selectedDate}`);
        window.scrollTo(0, 0);
    }

    return (
        <div id='dateSelect' className='pt-20'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10 
relative p-8 bg-gray-900/60 border border-gray-700/60 rounded-lg'>
                <BlurCircle top="-100px" left="-100px" />
                <BlurCircle top="100px" right="0px" />
                <div>
                    <p className='text-lg font-semibold'>Choose Date</p>
                    <div className='flex items-center gap-6 text-sm mt-5'>
                        <ChevronLeftIcon width={28} className="cursor-pointer" />
                        <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
                            {Object.keys(dateTime).map((date) => (
                                <button key={date} onClick={() => setSelectedDate(date)} className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer transition-colors ${selectedDate === date ? 'bg-red-500 text-white' : 'text-gray-300 hover:bg-gray-800'}`}>
                                    <span className='font-semibold'> {new Date(date).getDate()} </span>
                                    <span className='text-xs'> {new Date(date).toLocaleDateString("en-US",
                                        { month: "short" })} </span>
                                </button>
                            ))}
                        </span>
                        <ChevronRightIcon width={28} className="cursor-pointer" />
                    </div>
                </div>
                <button onClick={onBookHandler} className='bg-red-500 text-white px-8 py-2 md:mt-0 mt-4 rounded
                hover:bg-red-600 transition-all cursor-pointer active:scale-95'>Book Now</button>
            </div>
        </div>
    )
}

export default DateSelect