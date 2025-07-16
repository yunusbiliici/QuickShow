import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import BlurCircle from '../components/BlurCircle';

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('selectedSeats');
    if (data) {
      setBooking(JSON.parse(data));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  if (!booking) return <div>No bookings found.</div>;

  return (
    <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
      <BlurCircle top="100px" left="100px" />
      <BlurCircle top="0px" left="600px" />

      <h1 className="text-lg font-semibold mb-4">My Booking</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="w-full md:w-1/3">
          <img
            src={booking.movie.image}
            alt={booking.movie.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold">{booking.movie.title}</h2>
            <p className="text-gray-600">
              Duration: {booking.movie.duration}
            </p>
            <p className="mt-2">Date: {booking.date}</p>
            <p>Time: {booking.selectedTime}</p>
            <p>Seats: {booking.section.join(', ')}</p>
          </div>
          <div className="mt-4">
            <span className="text-lg font-semibold">
              {currency} {booking.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
