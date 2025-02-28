import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRestaurantById } from '../services/restaurantsService';
import { removeRestaurant } from '../services/restaurantsService';

const RestaurantDetail = () => {
    const { id } = useParams(); // Récupère l'id dans l'URL
    const [restaurant, setRestaurant] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        if (window.confirm("Voulez-vous vraiment supprimer ce restaurant ?")) {
            const result = await removeRestaurant(restaurant.id);
            if (result) {
                navigate("/"); // Redirection vers la liste des restaurants
            } else {
                alert("Erreur lors de la suppression du restaurant.");
            }
        }
    };

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

    if (isLoading) return <p className="text-center text-blue-500 text-xl">Chargement...</p>;

    if (error) return <p className="text-center text-red-500">{error}</p>;

    if (!restaurant) return <p className="text-center text-gray-500">Restaurant introuvable.</p>;

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
            <div className='flex justify-between mt-4'>
                <button 
                    onClick={() => navigate(`/edit/${restaurant.id}`)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                    Éditer
                </button>
            </div>

            <div className="mt-4 flex justify-between">
                <button 
                    onClick={handleDelete} 
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Supprimer
                </button>
            </div>
        </div>
    );
};

export default RestaurantDetail;