import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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


  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleGoBack = () => {
    navigate("/restaurants"); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/restaurants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurant),
      });

      if (!response.ok) throw new Error("Erreur lors de l'ajout");

      const newRestaurant = await response.json();
      navigate(`/restaurants/${newRestaurant.id}`);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8">➕ Ajouter un Restaurant</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Nom</label>
          <input type="text" name="name" value={restaurant.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Adresse</label>
          <input type="text" name="address" value={restaurant.address} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Cuisine</label>
          <input type="text" name="cuisine" value={restaurant.cuisine} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Note (1-5)</label>
          <input type="number" name="rating" value={restaurant.rating} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Téléphone</label>
          <input type="text" name="phone" value={restaurant.phone} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Site Web</label>
          <input type="url" name="website" value={restaurant.website} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Image (URL)</label>
          <input type="url" name="image" value={restaurant.image} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border-none text-white" required />
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
