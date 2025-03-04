import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { fetchRestaurantById } from "../services/restaurantsService";
import { removeRestaurant } from "../services/restaurantsService";


const RestaurantDetail = () => {
  const { id } = useParams(); 
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchRestaurantById(id)
      .then((data) => setRestaurant(data))
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

      <div className="flex justify-Left gap-4">
        <button
                onClick={handleGoBack}
                className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
              >
                ⬅ Retour
        </button>
      </div>

      <div className="flex justify-right gap-4">
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
  
  );
};

export default RestaurantDetail;
