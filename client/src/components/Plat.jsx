import React from 'react';
import '../styles/Plat.css'; 
import { FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

const Plat = ({ plat }) => {
  const { addToCart } = useCart();

  return (
    <div className="plat-card">
      <div className="plat-image">
        <img src={plat.image} alt={plat.name} />
      </div>
      <div className="plat-info">
        <h2>{plat.name}</h2>
        <div className="rating">
          <FaStar className="star-icon" />
          <span>{plat.price}€</span>
        </div>
        <p className="cuisine">{plat.description}</p>
        <button
          onClick={() => addToCart(plat)}
          className="mt-2 flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          <Plus size={16} />
          <span>Ajouter au panier</span>
        </button>
      </div>
    </div>
  );
};

export default Plat;
