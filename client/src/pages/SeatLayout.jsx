import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import assets, { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import Loading from '../components/Loading';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import isoTimeFormat from '../lib/isoTimeFormat';
import BlurCircle from '../components/BlurCircle';
import { toast } from 'react-hot-toast';

const SeatLayout = () => {
  const groupRows = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"]];

  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = async () => {
    const show = dummyShowsData.find(show => show._id === id);
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  };

  const selectedTime = selectedIndex !== null ? show?.dateTime[date]?.[selectedIndex] : null;

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast("Please select time first.");
    }

    if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5) {
      return toast("You can only select 5 seats");
    }

    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(seat => seat !== seatId)
        : [...prev, seatId]
    );
    localStorage.setItem('selectedSeats', JSON.stringify({
      section: selectedSeats.includes(seatId) ? selectedSeats.filter(seat => seat !== seatId) : [...selectedSeats, seatId],
      id: id,
      date: date,
      selectedTime: selectedTime,
      movie: show?.movie,
      totalSeats: selectedSeats.length + (selectedSeats.includes(seatId) ? -1 : 1),
      totalPrice: (selectedSeats.length + (selectedSeats.includes(seatId) ? -1 : 1)) * 10,
      currency: import.meta.env.VITE_CURRENCY
    }));

    toast(`Seat ${seatId} ${selectedSeats.includes(seatId) ? 'deselected' : 'selected'}`);
  };

  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex items-center justify-center gap-2 mt-2">
      <p className="w-4 text-center text-gray-400">{row}</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: count }, (_, index) => {
          const seatId = `${row}${index + 1}`;
          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`h-8 w-8 rounded border cursor-pointer transition ${selectedSeats.includes(seatId)
                ? 'bg-red-600 text-white border-red-600'
                : 'border-primary/60 hover:bg-red-100'
                }`}
            >
              {seatId}
            </button>
          );
        })}
      </div>
      <p className="w-4 text-center text-gray-400">{row}</p>
    </div>
  );

  useEffect(() => {
    getShow();
  }, []);

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      {/* Available Timings */}
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-semibold px-6">Available Timings</p>
        <div className="mt-4 flex flex-col gap-1">
          {show.dateTime[date].map((time, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${selectedIndex === index
                ? 'bg-red-600 text-white'
                : 'hover:bg-red-100'
                }`}
            >
              <ClockIcon className="w-4 h-4" />
              <p className="text-sm">{isoTimeFormat(time)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seat Layout */}
      <div className="relative flex-1 flex flex-col items-center max-md:mt-16">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle bottom="0" right="0" />
        <h1 className="text-2xl font-semibold mb-4">Select your seat</h1>
        <img src={assets.screenImage} alt="screen" />
        <p className="text-gray-400 text-sm mb-6">SCREEN SIDE</p>
        <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6">
            {groupRows[0].map(row => renderSeats(row))}
          </div>
          <div className="grid grid-cols-2 gap-11">
            {groupRows.slice(1).map((group, idx) => (
              <div key={idx}>
                {group.map(row => renderSeats(row))}
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => navigate('/my-bookings')} className='bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-colors duration-200'> Proceed to Checkout

          <ArrowRightIcon strokeWidth={3} className="w-4 h-4" />
        </button>

      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default SeatLayout;
