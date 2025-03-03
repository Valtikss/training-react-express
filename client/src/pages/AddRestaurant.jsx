import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRestaurant } from "../services/restaurantsService";

const AddRestaurant = () => {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    cuisine: "",
    rating: "",
    phone: "",
    website: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);


  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleGoBack = () => {
    navigate("/restaurants"); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const newRestaurant = await addRestaurant(restaurant);
      navigate(`/restaurants/${newRestaurant.id}`);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const validateForm = () => {
    const newErrors = {};
  
    // Vérification du nom
    if (!restaurant.name.trim()) {
      newErrors.name = "Le nom est obligatoire";
    }
  
    // Vérification de l'adresse (numéro + rue)
    if (!/^\d+[A-Za-z]?\s+\w+/.test(restaurant.address.trim())) {
      newErrors.address = "L'adresse doit contenir un numéro suivi d'un nom de rue";
    }
  
    // Vérification du type de cuisine
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(restaurant.cuisine.trim())) {
      newErrors.cuisine = "Le type de cuisine ne doit contenir que des lettres";
    }

    // Vérification du numéro de téléphone
    if (!/^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{2,4}[-.\s]?\d{2,4}[-.\s]?\d{0,4}$/.test(restaurant.phone.trim())) {
      newErrors.phone = "Numéro de téléphone invalide";
    }
    
    // Vérification de la note (entre 1 et 5)
    const rating = parseFloat(restaurant.rating);
    if (isNaN(rating) || rating < 1 || rating > 5) {
      newErrors.rating = "La note doit être entre 1 et 5";
    }
  
    // Vérification de l'URL du site
    if (!/^https?:\/\/.+\..+/.test(restaurant.website)) {
      newErrors.website = "L'URL du site doit être valide";
    }
  
    // Vérification de l'URL de l'image (supporte Google Photos, etc.)
    if (!/^https?:\/\/.+\..+\/.+/.test(restaurant.image)) {
      newErrors.image = "L'URL de l'image doit être valide";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };
  
  

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8">➕ Ajouter un Restaurant</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Nom</label>
          <input type="text" name="name" value={restaurant.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Adresse</label>
          <input type="text" name="address" value={restaurant.address} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Cuisine</label>
          <input type="text" name="cuisine" value={restaurant.cuisine} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
          {errors.cuisine && <p className="text-red-500 text-sm">{errors.cuisine}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Note (1-5)</label>
          <input type="number" name="rating" value={restaurant.rating} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Téléphone</label>
          <input type="text" name="phone" value={restaurant.phone} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Site Web (URL)</label>
          <input type="url" name="website" value={restaurant.website} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
          {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Image (URL)</label>
          <input type="url" name="image" value={restaurant.image} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all">
          Ajouter Restaurant
        </button>
      </form>


      <button
              onClick={handleGoBack}
              className="mb-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
            >
              ⬅ Retour
      </button>


    </div>
  );
};

export default AddRestaurant;
