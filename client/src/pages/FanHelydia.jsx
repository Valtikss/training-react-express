import React from "react";
import { Link } from "react-router-dom";

const FanHelydia = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 via-purple-700 to-black text-white px-6">
      
      {/* Titre principal avec effet glow */}
      <h1 className="text-5xl md:text-6xl font-extrabold font-poppins text-center mb-4 ">
        You're such a loser, mate.
      </h1>
      
      {/* Sous-titre stylisé */}
      <h3 className="text-lg md:text-xl font-medium font-poppins text-center italic opacity-80">
        Disgusting.
      </h3>

      {/* Image stylisée avec effet neon */}
      <div className="relative mt-6">
        <img 
          src="https://i.pinimg.com/736x/9b/75/79/9b7579fe08d80192493bb645959f1840.jpg" 
          alt="Helydia" 
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-purple-500 shadow-[0px_0px_15px_#8b5cf6] transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 rounded-full border-4 border-purple-500 opacity-50 blur-md"></div>
      </div>

      {/* Bouton stylisé avec glow */}
      <Link 
        to="/" 
        className="mt-6 bg-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-[0px_0px_15px_#a78bfa] transition-all duration-300 text-lg"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default FanHelydia;
