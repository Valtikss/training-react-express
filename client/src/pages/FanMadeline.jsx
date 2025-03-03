import React from "react";
import { Link } from "react-router-dom";

const FanMadeline = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-900 via-red-700 to-black text-white px-6">
      
      {/* Titre principal avec effet glow */}
      <h1 className="text-5xl md:text-6xl font-extrabold font-poppins text-center mb-4">
        Arg, you disappoint me...
      </h1>
      
      {/* Sous-titre stylisé */}
      <h3 className="text-lg md:text-xl font-medium font-poppins text-center italic opacity-80">
        You're just a kid.
      </h3>

      {/* Image stylisée avec effet neon */}
      <div className="relative mt-6">
        <img 
          src="https://media.glamour.com/photos/66c35f746f61bff33c43080d/master/w_2560%2Cc_limit/449682050_331213926706451_5760546936462903925_n.jpg" 
          alt="Madeline" 
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-red-500 shadow-[0px_0px_15px_#ef4444] transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 rounded-lg border-4 border-red-500 opacity-50 blur-md"></div>
      </div>

      {/* Bouton stylisé avec glow */}
      <Link 
        to="/" 
        className="mt-6 bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-red-700 hover:shadow-[0px_0px_15px_#f87171] transition-all duration-300 text-lg"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default FanMadeline;
