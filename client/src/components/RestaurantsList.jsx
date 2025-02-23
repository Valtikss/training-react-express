import { useEffect, useState } from 'react';

export default function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  // ✅ Récupération du localStorage au chargement du composant
  useEffect(() => {
    const savedSearch = localStorage.getItem('searchTerm');
    if (savedSearch) {
      setSearchTerm(savedSearch);
    }

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
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du fetch des restaurants:", err);
        setError("Une erreur est survenue lors du chargement des restaurants.");
        setLoading(false);
      });
  }, []);

  // ✅ Met à jour le state et le localStorage
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    localStorage.setItem('searchTerm', value);
  };

  // ✅ Bouton "Effacer" pour réinitialiser
  const clearSearch = () => {
    setSearchTerm('');
    localStorage.removeItem('searchTerm');
  };

  // 🔍 Filtrage insensible à la casse
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">🍽️ Liste des Restaurants</h2>

      {/* Barre de recherche + Bouton "Effacer" */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Rechercher un restaurant..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={clearSearch}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Effacer
        </button>
      </div>

      {/* Gestion du loading */}
      {loading && <div className="text-center text-xl">Chargement...</div>}

      {/* Gestion des erreurs */}
      {error && <div className="text-center text-red-500">{error}</div>}

      {/* Message si aucun résultat */}
      {!loading && !error && filteredRestaurants.length === 0 && (
        <div className="text-center text-gray-500">Aucun restaurant trouvé.</div>
      )}

      {/* ✅ Responsive grid avec Tailwind */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
