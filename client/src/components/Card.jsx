import React from 'react';

const Card = ({ restaurant }) => {
    return (
        <div className="relative text-white bg-yellow-400 border-4 border-black rounded-3xl w-80 m-4 p-4 transform transition-all duration-300 
                        hover:scale-105 hover:rotate-1 hover:shadow-[8px_8px_0px_#000]">
            {/* Image du restaurant */}
            <div className="relative w-full h-48 overflow-hidden rounded-2xl border-4 border-black">
                <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-black text-yellow-400 px-3 py-1 rounded-md text-sm font-bold">
                    {restaurant.rating} ⭐
                </div>
            </div>

            {/* Contenu de la carte */}
            <div className="mt-4">
                <h2 className="text-2xl font-extrabold text-white mb-1 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                    {restaurant.name}
                </h2>
                <p className="text-black text-sm font-semibold">{restaurant.cuisine}</p>
                <p className="text-black text-sm mt-1">📍 {restaurant.address}</p>
                <p className="text-black text-sm mt-1">📞 {restaurant.phone}</p>

                {/* Bouton exagéré avec effet cartoon */}
                <a 
                    href={restaurant.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block mt-4 text-center bg-red-500 text-white px-4 py-2 rounded-xl border-4 border-black 
                               shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] 
                               hover:shadow-[2px_2px_0px_#000] transition-all duration-200"
                >
                    🍢 Voir le site
                </a>
            </div>
        </div>
    );
};

export default Card;
