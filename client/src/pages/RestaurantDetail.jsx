import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { fetchRestaurantById, removeRestaurant } from "../services/restaurantsService";
import { fetchDishesByRestaurant } from "../services/dishesService";
import AddDish from "../pages/AddDishes";


const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDishes = () => {
    fetchDishesByRestaurant(id)
      .then(setDishes)
      .catch((err) => console.error("Erreur récupération des plats:", err));
  };

  useEffect(() => {
    fetchDishes();
    setIsLoading(true);
    setError(null);

    Promise.all([fetchRestaurantById(id), fetchDishesByRestaurant(id)])
      .then(([restaurantData, dishesData]) => {
        setRestaurant(restaurantData);
        setDishes(dishesData);
      })
      .catch((err) => {
        console.error("Erreur API :", err);
        setError("Impossible de charger ce restaurant.");
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleGoBack = () => {
    navigate("/restaurants");
  };

  const handleDelete = async () => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce restaurant ?")) return;

    try {
      await removeRestaurant(id);
      navigate("/restaurants");
    } catch (error) {
      setError("Erreur lors de la suppression.");
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!restaurant) return <p className="text-gray-500 text-center">Aucune donnée trouvée.</p>;

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold text-center mb-6">{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} className="w-full max-w-lg mx-auto rounded-lg shadow-lg" />
      <p className="text-gray-400 text-center mt-4">{restaurant.address}</p>
      <p className="text-gray-300 text-center mt-2">⭐ {restaurant.rating} / 5</p>
      <p className="text-gray-400 text-center mt-2">{restaurant.cuisine}</p>
      <p className="text-gray-500 text-center mt-4">{restaurant.description || "Aucune description disponible."}</p>

      {/* 🔹 Liste des plats disponibles */}
      <h2 className="text-2xl font-bold mt-8">🍽️ Plats disponibles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {dishes.length > 0 ? (
          dishes.map((dish) => (
            <div key={dish.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src={dish.image} alt={dish.name} className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-bold">{dish.name}</h3>
              <p className="text-gray-400">{dish.description}</p>
              <p className="text-yellow-400 font-semibold mt-2">{dish.price} €</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Aucun plat disponible pour ce restaurant.</p>
        )}
      </div>

      <div className="flex justify-center mt-6">
        <AddDish onDishAdded={() => fetchDishes()} />
      </div>

      {/* 🔹 Boutons d'action */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleGoBack}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
        >
          ⬅ Retour
        </button>

        

        <div className="flex gap-4">
          <button
            onClick={() => navigate(`/restaurants/${id}/edit`)}
            className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-md transition-all"
          >
            ✏️ Modifier
          </button>

          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-all"
          >
            🗑️ Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
