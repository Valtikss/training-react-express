import React, { useState, useEffect } from 'react';

// SERVICES
import { getRestaurants } from '../services/restaurantsService';

const RestaurantsList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRestaurants();
                setRestaurants(data);
            } catch (err) {
                setError('Error fetching data. Please try again later.');
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Liste des restaurants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="border p-4 rounded shadow-lg">
                        <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover rounded mb-2" />
                        <h3 className="text-lg font-bold">{restaurant.name}</h3>
                        <p><strong>Adresse:</strong> {restaurant.address}</p>
                        <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                        <p><strong>Note:</strong> ⭐ {restaurant.rating}</p>
                        <p><strong>Tel:</strong> {restaurant.phone}</p>
                        <a href={restaurant.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                            Site Web
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantsList;
