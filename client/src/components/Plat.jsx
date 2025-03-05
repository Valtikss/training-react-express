import React from 'react';
import '../styles/Plat.css'; 
import { FaStar } from 'react-icons/fa';

const Plat = ({ plat }) => {
  return (
    <div className="plat-card">
      <div className="plat-image">
        <img src={plat.image} alt={plat.name} />
      </div>
      <div className="plat-info">
        <h2>{plat.name}</h2>
        <div className="rating">
          <FaStar className="star-icon" />
          <span>{plat.price}</span>
        </div>
        <p className="cuisine">{plat.description}</p>
        <p className="address">{plat.restaurant_id}</p>
      </div>
    </div>
  );
};

export default Plat;
