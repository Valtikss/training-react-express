import React, { useEffect, useState } from 'react';

// SERVICES
import { getAllRestaurants } from '../services/restaurantsService';

// COMPONENT
import Card from './Card';

const RestaurantsList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await getAllRestaurants();
                setRestaurants(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
    
        fetchRestaurants();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-primary">
            <h1 className="text-4xl font-bold mb-4">Restaurants</h1>
            {loading ? (
                <p className="text-lg text-gray-700">Chargement...</p>
            ) : (
                <div className="flex flex-wrap justify-center">
                    {restaurants.map((restaurant) => (
                        <Card key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default RestaurantsList;