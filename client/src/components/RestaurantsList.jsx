import React, { useEffect, useState } from "react";
import { getRestaurants } from "../services/restaurantsService";
import Restaurant from './Restaurant';
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/loading.json";

const RestaurantsList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getRestaurants();
                const restaurantsData = Array.isArray(response.data) ? response.data : [];
                setRestaurants(restaurantsData);
                setFilteredRestaurants(restaurantsData);
            } catch (e) {
                console.error('Error fetching data:', e);
                setError('Failed to load restaurants. Please try again later.');
                setRestaurants([]);
                setFilteredRestaurants([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = restaurants.filter(restaurant =>
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
            restaurant.address.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }, [searchTerm, restaurants]);

    const LoadingAnimation = () => (
        <div className="col-span-full flex flex-col items-center justify-center py-12">
            <Lottie 
                animationData={loadingAnimation}
                loop={true}
                style={{ width: 200, height: 200 }}
            />
            <p className="text-gray-500 mt-4">Loading restaurants...</p>
        </div>
    );

    if (error) {
        return (
            <section>
                <h2 className="text-2xl font-bold mb-4">Restaurants</h2>
                <div className="text-red-500 p-4 rounded-lg bg-red-50">
                    {error}
                </div>
            </section>
        );
    }

    return (
        <section>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Restaurants</h2>
                <div className="relative w-72">
                    <input
                        type="text"
                        placeholder="Rechercher un restaurant..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                    <svg 
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    <LoadingAnimation />
                ) : (
                    filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map(restaurant => (
                            <Restaurant key={restaurant.id} restaurant={restaurant} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-8 text-gray-500">
                            {searchTerm ? 'No restaurants found matching your search' : 'No restaurants available'}
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default RestaurantsList;