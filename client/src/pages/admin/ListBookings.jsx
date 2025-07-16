import React, { useState, useEffect } from 'react';
import { dummyBookingData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';

const ListBookings = () => {
    const currency = import.meta.env.VITE_CURRENCY || 'TL'; // Varsayılan TL
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("Veri kontrol:", dummyBookingData);
        setBookings(dummyBookingData);
        setIsLoading(false);
    }, []);

    if (isLoading) return <Loading />;

    return (
        <>
            <Title text1="List" text2="Bookings" />
            <div className="max-w-4xl mt-6 overflow-x-auto">
                <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
                    <thead>
                        <tr className="bg-red-500/20 text-left text-white">
                            <th className="p-2 font-medium pl-5">User Name</th>
                            <th className="p-2 font-medium pl-5">Movie Name</th>
                            <th className="p-2 font-medium pl-5">Show Time</th>
                            <th className="p-2 font-medium pl-5">Seats</th>
                            <th className="p-2 font-medium pl-5">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, idx) => (
                            <tr key={idx} className="even:bg-red-500  :bg-red-100">
                                <td className="p-2 pl-5">{booking.userName}</td>
                                <td className="p-2 pl-5">{booking.movieTitle}</td>
                                <td className="p-2 pl-5">{booking.showTime}</td>
                                <td className="p-2 pl-5">{booking.seats.join(', ')}</td>
                                <td className="p-2 pl-5">
                                    {booking.amount} {currency}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListBookings;
