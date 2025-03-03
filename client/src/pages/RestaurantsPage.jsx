import React from "react";
import RestaurantsList from "../components/RestaurantsList";
import { Link } from "react-router-dom";

const RestaurantsPage = () => {
  return (

    <div className="min-h-screen bg-gray-100">
      
    <div className="p-8 bg-gray-900 text-white">
      <Link to="/add-restaurant" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg pt-2 pb-2 pl-4 pr-4">
        ➕ Ajouter un Restaurant
      </Link>
    </div>

          
      <RestaurantsList />
    </div>
  );
};

export default RestaurantsPage;
