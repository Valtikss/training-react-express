import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRestaurantById, editRestaurant } from "../services/restaurantsService";

const EditRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantById(id)
      .then((data) => {
        setRestaurant(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMessage("Erreur lors du chargement du restaurant");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await editRestaurant(id, restaurant);
      navigate(`/restaurants/${id}`); 
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!restaurant.name.trim()) newErrors.name = "Le nom est obligatoire";
    if (!restaurant.address.trim()) newErrors.address = "L'adresse est obligatoire";
    if (!restaurant.cuisine.trim()) newErrors.cuisine = "Le type de cuisine est obligatoire";
    if (!/^\+?\d{10,15}$/.test(restaurant.phone.replace(/\D/g, ""))) newErrors.phone = "Numéro de téléphone invalide";
    const rating = parseFloat(restaurant.rating);
    if (isNaN(rating) || rating < 1 || rating > 5) newErrors.rating = "La note doit être entre 1 et 5";
    if (!/^https?:\/\/.+\..+/.test(restaurant.website)) newErrors.website = "URL invalide";
    if (!/^https?:\/\/.+\..+\/.+/.test(restaurant.image)) newErrors.image = "L'URL de l'image est invalide";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  if (loading) return <p className="text-gray-500 text-center">Chargement...</p>;

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8">✏️ Modifier Restaurant</h2>

      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Nom</label>
          <input type="text" name="name" value={restaurant.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Adresse</label>
          <input type="text" name="address" value={restaurant.address} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Cuisine</label>
          <input type="text" name="cuisine" value={restaurant.cuisine} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" />
          {errors.cuisine && <p className="text-red-500 text-sm">{errors.cuisine}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Note (1-5)</label>
          <input type="number" name="rating" value={restaurant.rating} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" />
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Téléphone</label>
          <input type="text" name="phone" value={restaurant.phone} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Site Web (URL)</label>
          <input type="url" name="website" value={restaurant.website} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" />
          {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Image (URL)</label>
          <input type="url" name="image" value={restaurant.image} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg font-semibold transition-all">
          Enregistrer
        </button>
      </form>

      <button
        onClick={() => navigate(`/restaurants/${id}`)}
        className="mt-6 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition-all"
      >
        ⬅ Annuler
      </button>
    </div>
  );
};

export default EditRestaurant;
