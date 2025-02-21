import React from 'react';
import '../styles/Restaurant.css'; 
import { FaStar } from 'react-icons/fa';

const Restaurant = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img src={restaurant.image} alt={restaurant.name} />
      </div>
      <div className="restaurant-info">
        <h2>{restaurant.name}</h2>
        <div className="rating">
          <FaStar className="star-icon" />
          <span>{restaurant.rating}</span>
        </div>
        <p className="cuisine">{restaurant.cuisine}</p>
        <p className="address">{restaurant.address}</p>
      </div>
    </div>
  );
};

export default Restaurant;
