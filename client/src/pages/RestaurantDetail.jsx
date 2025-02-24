import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// SERVICES
import { getRestaurantById } from '../services/restaurantsService';

// COMPONENTS
import Loader from '../components/Loader';

const RestaurantDetail = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
        try {
            const response = await getRestaurantById(id);
            setRestaurant(response.data);
        } catch (err) {
            console.error(err);
            setError('Impossible de charger ce restaurant.');
        } finally {
            setLoading(false);
        }
        };
        fetchRestaurant();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
        <div className="flex items-center justify-center h-screen bg-red-100">
            <p className="text-red-600 text-xl font-semibold">{error}</p>
        </div>
        );
    }

    if (!restaurant) {
        return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <p className="text-xl text-gray-700">Aucune donnée disponible pour ce restaurant.</p>
        </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
                        {restaurant.name}
                    </h1>
                </div>
            </div>

            {/* Infos section */}
            <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
                <div className="bg-white shadow-md rounded p-6 md:p-10">
                    <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="md:w-1/2 mb-4 md:mb-0">
                            <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-auto rounded shadow-md hidden md:block"
                            />
                        </div>

                        <div className="md:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{restaurant.name}</h2>
                            <p className="text-sm text-gray-400 italic mb-4">
                                Cuisine : {restaurant.cuisine}
                            </p>

                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-yellow-400 text-xl">★</span>
                                <span className="text-lg font-semibold">{restaurant.rating}</span>
                                <span className="text-gray-600">/ 5</span>
                            </div>

                            <p className="text-gray-800 mb-2">
                                <span className="font-semibold">Adresse : </span>{restaurant.address}
                            </p>
                            <p className="text-gray-800 mb-2">
                                <span className="font-semibold">Téléphone : </span>{restaurant.phone}
                            </p>
                            {restaurant.website && (
                                <p className="text-blue-600 hover:underline mb-4">
                                <a href={restaurant.website} target="_blank" rel="noreferrer">
                                    Site Web
                                </a>
                                </p>
                            )}

                            {/* Bouton ou texte additionnel */}
                            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors">
                                Réserver
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetail;