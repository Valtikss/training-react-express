import { useEffect, useState } from 'react';

export default function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/api/restaurants')
      .then(response => response.json())
      .then(data => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors du fetch :", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Chargement...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Liste des Restaurants 🍽️</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
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
