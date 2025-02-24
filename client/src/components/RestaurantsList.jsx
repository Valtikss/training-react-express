import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

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
    }, 200);

    return () => clearTimeout(timer);
  }, [searchTerm, restaurants]);

  return (
    <div className="min-h-screen text-white p-6">
      {/* Conteneur pour centrer le contenu et limiter la largeur sur grand écran */}
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-start">
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl 
          font-extrabold mb-6 
          drop-shadow-[4px_4px_0px_#000] 
          text-center
        ">
          🍢 KEBABS PRÈS DE CHEZ TOI 🍢
        </h1>

        {/* Barre de recherche stylisée */}
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {loading ? (
          <Loader />
        ) : error ? (
          <p className="
            mt-6 text-lg text-red-500 
            bg-white shadow-md p-4 rounded-lg 
            border-4 border-black
          ">
            {error}
          </p>
        ) : (
          <div className="
            w-full mt-7 
            grid gap-7
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            xl:grid-cols-4 
            animate-fadeIn
          ">
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant) => (
                <Link key={restaurant.id} 
                       to={`/restaurants/${restaurant.id}`} 
                        className="m-2">
                                <Card key={restaurant.id} restaurant={restaurant} />
                            </Link>
              ))
            ) : (
              <p className="text-gray-200 font-bold text-xl col-span-full text-center">
                Aucun kebab trouvé... 😢
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantsList;
