import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

// SERVICES
import { getAllRestaurants } from '../services/restaurantsService';

// COMPONENT
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
        const savedSearchTerm = localStorage.getItem("searchTerm");
        if (savedSearchTerm) {
            setSearchTerm(savedSearchTerm);
        }
    }, []);

    useEffect(() => {
        const fetchRestaurants = async () => {
            const controller = new AbortController(); // Protection contre les fuites mémoire
            try {
                const response = await getAllRestaurants();
                setRestaurants(response.data);
                setFilteredRestaurants(response.data);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error fetching data:', error);
                    setError('Error fetching data. Please try again later.');
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
        }, 300); // Délai de 300ms

        return () => clearTimeout(timer); // Nettoyage si l’utilisateur tape rapidement
    }, [searchTerm, restaurants]);

    useEffect(() => {
        localStorage.setItem("searchTerm", searchTerm);
    }, [searchTerm]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-primary p-4">
            <h1 className="text-4xl font-bold mb-4">Restaurants</h1>

            {/* Barre de recherche */}
            <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            {loading ? (
                <Loader />
            ) : error ? (
                <p className="text-lg text-red-500 bg-white shadow-md p-4 rounded-lg">{error}</p>
            ) : (
                <div className="
                    grid 
                    grid-cols-1 
                    gap-4 
                    w-full
                    md:grid-cols-2 
                    lg:grid-cols-3 
                    xl:grid-cols-4
                ">
                    {filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map((restaurant) => (
                            <Link 
                                key={restaurant.id} 
                                to={`/restaurants/${restaurant.id}`} 
                                className="m-2"
                            >
                                <Card key={restaurant.id} restaurant={restaurant} />
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-600">Aucun restaurant ne correspond à votre recherche.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default RestaurantsList;