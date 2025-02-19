import React from 'react';

const Card = ({ restaurant }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 m-4">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{restaurant.name}</h2>
                <p className="text-gray-600">{restaurant.cuisine}</p>
                <p className="text-gray-500">{restaurant.address}</p>
                <p className="text-gray-500">📞 {restaurant.phone}</p>
                <a 
                    href={restaurant.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    {restaurant.website}
                </a>
                <p className="mt-2 text-yellow-500 font-bold">⭐ {restaurant.rating}/5</p>
            </div>
        </div>
    );
};

export default Card;