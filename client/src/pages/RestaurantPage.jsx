import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { getRestaurantById, deleteRestaurant } from '../services/restaurantsService';
import { getPlats } from '../services/platsService';

import { FaHeart, FaEllipsisH, FaStar, FaEdit, FaTrash } from 'react-icons/fa';
import { Plus } from 'lucide-react';

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
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-red-600">{error}</div>
            </div>
        );
    }

    if (!restaurant) {
        return (
            <div className="flex items-center justify-center bg-gray-200">
                <p className="text-xl text-gray-700">Aucune donnée disponible pour ce restaurant.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="relative w-full h-60 md:h-72">
                <img 
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                />
            
                
                <div className="absolute bottom-5 left-5 text-white">
                    <h1 className="text-3xl sm:text-4xl font-bold">{restaurant.name}</h1>
                    <div className="flex items-center mt-1">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-lg font-semibold">{restaurant.rating} ({restaurant.reviews} avis)</span>
                    </div>
                </div>

                <div className="absolute top-5 right-5 flex space-x-4">
                    <button 
                        onClick={() => navigate(`/restaurants/${id}/edit`)}
                        className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                        title="Modifier le restaurant"
                    >
                        <FaEdit className="text-gray-700 text-xl" />
                    </button>
                    <button 
                        onClick={handleDelete}
                        className="bg-white rounded-full p-2 shadow-md hover:bg-red-500 hover:text-white transition-colors"
                        title="Supprimer le restaurant"
                    >
                        <FaTrash className="text-xl" />
                    </button>
                    <button className="bg-white rounded-full p-2 shadow-md">
                        <FaHeart className="text-gray-700 text-xl" />
                    </button>
                    <button className="bg-white rounded-full p-2 shadow-md">
                        <FaEllipsisH className="text-gray-700 text-xl" />
                    </button>
                </div>
            </div>

            <div className="container mx-auto p-5">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">À propos</h2>
                    <p className="text-gray-600">{restaurant.description}</p>

                    <hr className="my-6" />

                    <h2 className="text-2xl font-bold mb-4">Informations</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <p><span className="font-semibold">Cuisine:</span> {restaurant.cuisine}</p>
                        <p><span className="font-semibold">Adresse:</span> {restaurant.address}</p>
                        <p><span className="font-semibold">Horaires:</span> Tous les jours <br/>11:00 - 14:00<br/> 18:00 - 21:00</p>
                        <p><span className="font-semibold">Moyens de paiement:</span> Swile, Pluxee, Ticket Restaurant®</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-10 bg-gray-200 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Nos Plats</h2>

                {platsLoading ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {plats.filter(plat => plat.restaurant_id === restaurant.id).map((plat) => (
                            <div key={plat.id} className="bg-white p-4 rounded-lg shadow-md">
                                <div className="w-full h-40 bg-gray-300 rounded-md mb-4">
                                    <img src={plat.image} alt={plat.name} className="w-full h-full object-cover rounded-md" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{plat.name}</h3>
                                <p className="text-gray-600">{plat.description}</p>
                                <p className="text-gray-800 font-semibold mt-2">{plat.price} €</p>
                            </div>
                        ))}
                        <Link to={`/plats/${restaurant.id}/create`} className="hover:text-gray-400">
                            <div className="flex items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded-lg p-4">
                                <span className="text-gray-500">
                                    <Plus color="green" size={20}/>
                                </span>
                            </div>                    
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RestaurantPage;
