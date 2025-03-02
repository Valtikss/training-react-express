import React, { useEffect, useState } from "react";
import { MapPin, Utensils, Star, Phone, Globe, UtensilsCrossed} from "lucide-react";

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Erreur lors du fetch des restaurants :", error));
  }, []);

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8 flex items-center justify-center gap-2">
        <UtensilsCrossed className="text-yellow-400" size={40} />
        Nos Restaurants
        <UtensilsCrossed className="text-yellow-400" size={40} />
    </h2>

      {/* Grid responsive pour l'affichage des restaurants */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Image du restaurant */}
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* Contenu du restaurant */}
            <div className="p-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Utensils className="text-yellow-400" size={20} />
                {restaurant.name}
              </h3>

              <p className="text-gray-400 flex items-center gap-2 mt-2">
                <MapPin className="text-blue-400" size={18} />
                {restaurant.address}
              </p>

              <p className="text-gray-300 flex items-center gap-2 mt-2">
                <Utensils className="text-red-400" size={18} />
                Cuisine : {restaurant.cuisine}
              </p>

              <p className="text-gray-300 flex items-center gap-2 mt-2">
                <Star className="text-yellow-400" size={18} />
                Note : {restaurant.rating} / 5
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
        ))}
      </div>
    </div>
  );
};

export default RestaurantsList;
