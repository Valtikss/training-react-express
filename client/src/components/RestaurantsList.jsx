import React, { useEffect, useState } from 'react';

// SERVICES
import { getAllRestaurants } from '../services/restaurantsService';

// COMPONENTS
import Card from './Card';
import Loader from './Loader';
import SearchBar from "./SearchBar";

const RestaurantsList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            const controller = new AbortController(); // Protection contre les fuites mémoire
            try {
                const response = await getAllRestaurants();
                setRestaurants(response.data);
                setFilteredRestaurants(response.data);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Erreur lors de la récupération des restaurants:', error);
                    setError('Impossible de charger les restaurants. Réessayez plus tard.');
                }
            }
            
            setLoading(false);
            return () => controller.abort();
        };
    
        fetchRestaurants();
    }, []);

    // Debounce pour éviter un filtrage à chaque frappe
    useEffect(() => {
        const timer = setTimeout(() => {
            const filtered = restaurants.filter((restaurant) =>
                JSON.stringify(restaurant).toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredRestaurants(filtered);
        }, 200); // Délai de 300ms

        return () => clearTimeout(timer);
    }, [searchTerm, restaurants]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white p-6">
            <h1 className="text-5xl font-extrabold mb-6 drop-shadow-[4px_4px_0px_#000]">🍢 KEBABS PRÈS DE CHEZ TOI 🍢</h1>

            {/* Barre de recherche stylisée */}
            <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            {loading ? (
                <Loader />
            ) : error ? (
                <p className="text-lg text-red-500 bg-white shadow-md p-4 rounded-lg border-4 border-black">
                    {error}
                </p>
            ) : (
                <div className="flex flex-wrap justify-center animate-fadeIn">
                    {filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map((restaurant) => (
                        <Card key={restaurant.id} restaurant={restaurant} />
                        ))
                    ) : (
                        <p className="text-gray-800 font-bold text-xl mt-4">Aucun kebab trouvé... 😢</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default RestaurantsList;
