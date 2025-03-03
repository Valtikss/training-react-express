import React, { useEffect, useState } from "react";
import { fetchRestaurants } from "../services/restaurantsService.jsx";
import { UtensilsCrossed, MapPin, Star, Phone, Globe } from "lucide-react";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    setIsLoading(true);
    setError(null); 

    fetchRestaurants()
      .then((data) => {
        setTimeout(() => {
          setRestaurants(data);
          setIsLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Erreur API :", err);
        setError("Impossible de charger les restaurants. Veuillez réessayer.");
        setIsLoading(false); 
      });
  }, []);


  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8 flex items-center justify-center gap-2">
        <UtensilsCrossed className="text-yellow-400" size={40} />
        Nos Restaurants
      </h2>


      <SearchBar onSearchChange={setSearchQuery} />

      {error && (
        <p className="text-red-500 text-center">{error}</p>
      )}

      {isLoading ? (
        <Loader />
      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <UtensilsCrossed className="text-yellow-400" size={20} />
                    {restaurant.name}
                  </h3>

                  <p className="text-gray-400 flex items-center gap-2 mt-2">
                    <MapPin className="text-blue-400" size={18} />
                    {restaurant.address}
                  </p>

                  <p className="text-gray-300 flex items-center gap-2 mt-2">
                    <Star className="text-yellow-400" size={18} />
                    {restaurant.rating} / 5
                  </p>

                  <p className="text-gray-300 flex items-center gap-2 mt-2">
                    <Phone className="text-green-400" size={18} />
                    {restaurant.phone}
                  </p>

                  <a
                    href={restaurant.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-4 text-blue-400 hover:underline"
                  >
                    <Globe size={18} />
                    Visiter le site
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">
              Aucun restaurant trouvé. 🍽️
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default RestaurantsList;
