import { useEffect, useState } from 'react';

export default function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    
    fetch('http://localhost:4000/api/restaurants')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      setRestaurants(data);
      setLoading(false); // ✅ Stop le loading après réception
    })
    .catch((err) => {
      console.error("Erreur lors du fetch des restaurants:", err);
      setError("Une erreur est survenue lors du chargement des restaurants.");
      setLoading(false); // ❌ Stop le loading même en cas d'erreur
    });
}, []);

    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">🍽️ Liste des Restaurants</h2>
    
          {/* Barre de recherche */}
          <input
            type="text"
            placeholder="Rechercher un restaurant..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
    
          {/* Gestion du loading */}
          {loading && <div className="text-center text-xl">Chargement...</div>}
    
          {/* Gestion des erreurs */}
          {error && <div className="text-center text-red-500">{error}</div>}
    
          {/* Affichage des restaurants */}
          {!loading && !error && filteredRestaurants.length === 0 && (
            <div className="text-center text-gray-500">Aucun restaurant trouvé.</div>
          )}
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
                <p className="text-gray-600">📍 {restaurant.address}</p>
                <p className="text-gray-500">🍳 Cuisine : {restaurant.cuisine}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }