import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { getRestaurantById, deleteRestaurant } from '../services/restaurantsService';
import { getPlats } from '../services/platsService';

import { FaHeart, FaEllipsisH, FaStar, FaEdit, FaTrash } from 'react-icons/fa';
import { Plus } from 'lucide-react';
import PlatList from '../components/PlatList';

function RestaurantPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [plats, setPlats] = useState([]);
    const [platsLoading, setPlatsLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await getRestaurantById(id);
                setRestaurant(response.data);
            } catch (error) {
                console.error('Error fetching restaurant:', error);
                setError('Restaurant not found');
            } finally {
                setLoading(false);
            }
        };

        const fetchPlats = async () => {
            try {
                const response = await getPlats();
                setPlats(response.data);
            } catch (error) {
                console.error('Error fetching plats:', error);
            } finally {
                setPlatsLoading(false);
            }
        };

        fetchRestaurant();
        fetchPlats();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce restaurant?')) {
            try {
                await deleteRestaurant(id);
                navigate('/home');
            } catch (error) {
                console.error('Error deleting restaurant:', error);
                setError('Failed to delete restaurant');
            }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="relative w-full h-60 md:h-72">
                    <img 
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
                            <div className="flex items-center gap-4 text-gray-600">
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <span>{restaurant.rating}</span>
                                </div>
                                <span>•</span>
                                <span>{restaurant.cuisine}</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                                <FaHeart className="text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                                <FaEllipsisH className="text-gray-600" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 text-gray-600">
                        <p>{restaurant.address}</p>
                        <p>{restaurant.phone}</p>
                        <a href={restaurant.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {restaurant.website}
                        </a>
                    </div>
                    <div className="mt-6 flex gap-4">
                        <Link
                            to={`/restaurants/${id}/edit`}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
                        >
                            <FaEdit />
                            <span>Modifier</span>
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200"
                        >
                            <FaTrash />
                            <span>Supprimer</span>
                        </button>
                        <Link
                            to={`/plats/${id}/create`}
                            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
                        >
                            <Plus size={20} />
                            <span>Ajouter un plat</span>
                        </Link>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-2xl font-bold mb-6">Menu</h2>
                    {platsLoading ? (
                        <div className="flex justify-center py-8">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                    ) : (
                        <PlatList plats={plats.filter(plat => plat.restaurant_id === parseInt(id))} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default RestaurantPage;
