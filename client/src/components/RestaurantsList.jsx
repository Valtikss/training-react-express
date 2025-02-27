import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRestaurants } from "../services/restaurantsService";
import Restaurant from './Restaurant';
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/loading.json";
import useRestaurantSearch from '../hooks/useRestaurantSearch';
import { Plus } from "lucide-react";

const RestaurantsList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const {
        searchTerm,
        filteredRestaurants,
        handleSearchChange,
        handleClearSearch
    } = useRestaurantSearch(restaurants);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await getRestaurants();
                const restaurantsData = Array.isArray(response.data) ? response.data : [];
                setRestaurants(restaurantsData);
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
        <section className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold">Restaurants</h2>
                <div className="relative w-full sm:w-72">
                    <input
                        type="text"
                        placeholder="Search restaurants..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full px-4 py-2 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm sm:text-base"
                    />
                    {searchTerm && (
                        <button
                            onClick={handleClearSearch}
                            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            title="Clear search"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                    <svg 
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" 
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {loading ? (
                    <LoadingAnimation />
                ) : (
                    filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map(restaurant => (
                            <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
                                <Restaurant key={restaurant.id} restaurant={restaurant} />
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-8 text-gray-500 text-sm sm:text-base">
                            {searchTerm ? 'No restaurants found matching your search' : 'No restaurants available'}
                        </div>
                    )
                )}
                <Link to="/create" className="hover:text-gray-400">
                    <div className="flex items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded-lg p-4">
                        <span className="text-gray-500">
                            <Plus color="green" size={20}/>
                        </span>
                    </div>                    
                </Link>
            </div>
        </section>
    );
};

export default RestaurantsList;