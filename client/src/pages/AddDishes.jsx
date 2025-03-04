import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { addDishToRestaurant, fetchDishesByRestaurant } from "../services/dishesService";

const AddDish = ({ onDishAdded }) => {
  const { id } = useParams();
  const [dish, setDish] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [error, setError] = useState(null);

  // Gestion des changements de champs
  const handleChange = (e) => {
    setDish({ ...dish, [e.target.name]: e.target.value });
  };

  // Gestion du submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    // Vérification des champs
    if (!dish.name.trim()) {
      setError("Le nom du plat est obligatoire.");
      return;
    }
    if (!dish.price || isNaN(dish.price) || dish.price <= 0) {
      setError("Le prix doit être un nombre positif.");
      return;
    }
  
    try {
      const newDish = await addDishToRestaurant(id, dish); // API call
  
      // Ajoute directement le plat dans la liste existante
      onDishAdded((prevDishes) => [...prevDishes, newDish]);
  
      // Réinitialise le formulaire
      setDish({ name: "", price: "", description: "", image: "" });
    } catch (error) {
      setError("Erreur lors de l'ajout du plat.");
      console.error("API Error:", error);
    }
  };
  

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white max-w-lg mx-auto mt-6">
      <h3 className="text-xl font-bold mb-4">➕ Ajouter un Plat</h3>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={dish.name}
          onChange={handleChange}
          placeholder="Nom du plat"
          className="w-full p-2 rounded bg-gray-700 border-none text-white"
          required
        />

        <input
          type="number"
          name="price"
          value={dish.price}
          onChange={handleChange}
          placeholder="Prix (€)"
          className="w-full p-2 rounded bg-gray-700 border-none text-white"
          required
        />

        <textarea
          name="description"
          value={dish.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 rounded bg-gray-700 border-none text-white"
        ></textarea>

        <input
          type="url"
          name="image"
          value={dish.image}
          onChange={handleChange}
          placeholder="URL de l'image"
          className="w-full p-2 rounded bg-gray-700 border-none text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-all"
        >
          Ajouter le Plat
        </button>
      </form>
    </div>
  );
};

export default AddDish;
