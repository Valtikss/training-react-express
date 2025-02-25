import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../services/restaurantsService';

const RestaurantDetail = () => {
    const { id } = useParams(); // Récupère l'id dans l'URL
    const [restaurant, setRestaurant] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const data = await getRestaurantById(id);
                if (data) {
                    setRestaurant(data);
                } else {
                    setError("Restaurant introuvable.");
                }
            } catch (err) {
                setError("Erreur lors de la récupération du restaurant.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchRestaurant();
    }, [id]);

    if (isLoading) {
        return <p className="text-center text-blue-500 text-xl">Chargement...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (!restaurant) {
        return <p className="text-center text-gray-500">Restaurant introuvable.</p>;
    }

    return (
        <div className="p-5 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">{restaurant.name}</h2>
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-60 object-cover rounded my-4" />
            <p><strong>Adresse:</strong> {restaurant.address}</p>
            <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
            <p><strong>Note:</strong> ⭐ {restaurant.rating}</p>
            <p><strong>Téléphone:</strong> {restaurant.phone}</p>
            <a href={restaurant.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Site Web
            </a>
        </div>
    );
};

export default RestaurantDetail;