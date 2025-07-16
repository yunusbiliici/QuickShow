import React from 'react'
import { useState } from 'react'
import { dummyShowsData } from '../../assets/assets';
import { useEffect } from 'react';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';

const ListShows = () => {

    const currency = import.meta.env.VITE_CURRENCY

    const [shows, setShows] = useState(true);
    const [loading, setLoading] = useState(true);

    const getAllShows = async () => {
        try {
            setShows([{
                movie: dummyShowsData[0],
                showDateTime: "2025-06-30T02:30:00.000Z",
                showPrice: 59,
                occupiedSeats: {
                    A1: "user_1",
                    B1: "user_3",
                    C1: "user_3",
                }

            }])
            setLoading(false);
        } catch (error) {

            console.error(error);
        }

    }
    console.log("Buradayız:", getAllShows);
    useEffect(() => {
        getAllShows();
    }, []);

    return !loading ? (
        <>
            <Title text1="List" text2="Shows" />
            <div className='max-w-4xl mt-6 overflow-x-auto' >
                <table className='w-full border-collapse rounded-md
    overflow-hidden text-nowrap'>
                    <thead>
                        <tr className='bg-red-500/20 text-left text-white'>
                            <th className='p-2 font- font-medium'>Movie Name</th>
                            <th className='p-2 font- font-medium'>Show Time</th>
                            <th className='p-2 font- font-medium'>Total Bookings</th>
                            <th className='p-2 font- font-medium'>Earnings</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm font-light'>
                        {shows.map((show, index) => (
                            <tr key={index} className='border-b border-red-500/10
bg-red-500 even: bg-red-500/10'>
                                <td className='p-2 mix-w-45 pl-5'>{show.movie.title}</td>
                                <td className='p-2 '>{new Date(show.showDateTime).toLocaleString()}</td>
                                <td className='p-2'>{Object.keys(show.occupiedSeats).length}</td>
                                <td className='p-2 '>{currency} {Object.keys(show.occupiedSeats).length * show.showPrice}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>


            </div>
        </>
    ) : <Loading />
}

export default ListShows