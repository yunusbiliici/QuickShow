import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, StarIcon, UsersIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import BlurCircle from '../../components/BlurCircle';

const Dashboard = () => {
    const currency = import.meta.env.VITE_CURRENCY || "$";

    const [dashboardData, setDashboardData] = useState({
        totalBookings: 0,
        totalRevenue: 0,
        activeShows: [],
        totalUser: 0,
    });

    const [loading, setLoading] = useState(true);

    const dashboardCards = [
        { title: "Total Bookings", value: dashboardData.totalBookings || "0", icon: ChartLineIcon },
        { title: "Total Revenue", value: `${dashboardData.totalRevenue || "0"} ${currency}`, icon: CircleDollarSignIcon },
        { title: "Active Shows", value: (dashboardData.activeShows || []).length || "0", icon: PlayCircleIcon },
        { title: "Total users", value: dashboardData.totalUser || "0", icon: UsersIcon },
    ];

    const fetchDashboardData = async () => {
        console.log("Dummy dashboard data:", dummyDashboardData);
        setDashboardData(dummyDashboardData);
        setLoading(false);
    };

    // Basit tarih format fonksiyonu
    const dateFormat = (dateString) => {
        const d = new Date(dateString);
        return d.toLocaleDateString();
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    return !loading ? (
        <>
            <Title text1="Admin" text2="Dashboard" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {dashboardCards.map((card, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-center gap-4">
                        <div className="bg-red-600/20 p-3 rounded-full">
                            {React.createElement(card.icon, { className: 'w-8 h-8 text-red-600' })}
                        </div>
                        <div>
                            <p className="text-gray-400">{card.title}</p>
                            <h3 className="text-2xl font-bold">{card.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <p className="mt-10 text-lg font-medium">Active Show</p>
            <div className="relative flex flex-wrap gap-6 mt-4 max-w-5xl">
                <BlurCircle top="100px" left="-10%" />
                {(dashboardData.activeShows || []).map((show) => (
                    <div
                        key={show._id}
                        className="w-55 rounded-lg overflow-hidden h-full pb-3 bg-red-500/10 border border-red-500/20 hover:-translate-y-1 transition duration-300"
                    >
                        <img src={show.movie.poster_path} alt={show.movie.title} className="h-60 w-full object-cover" />
                        <p className="font-medium p-2 truncate">{show.movie.title}</p>
                        <div className="flex items-center justify-between px-2">
                            <p className="text-lg font-medium">
                                {currency}
                                {show.price}
                            </p>
                            <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
                                <StarIcon className="w-4 h-4 text-red-500 fill-red-500" />
                                {show.movie.vote_average.toFixed(1)}
                            </p>
                        </div>
                        <p className="px-2 pt-2 text-sm text-gray-500">{dateFormat(show.showDateTime)}</p>
                    </div>
                ))}
            </div>
        </>
    ) : (
        <Loading />
    );
};

export default Dashboard;
