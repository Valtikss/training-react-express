import React from "react";
import { Link } from "react-router-dom";

const FanHelydia = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-indigo-900 text-white px-6">
      
      {/* Titre principal sans effet néon */}
      <h1 className="text-5xl md:text-6xl font-extrabold font-poppins text-center mb-4">
        Holy Crap Mate, Appreciated! 
      </h1>
      
      {/* Sous-titre stylisé */}
      <h3 className="text-lg md:text-xl font-medium font-poppins text-center italic opacity-90">
        You are the GOAT 🐐
      </h3>

      {/* Image stylisée avec effet néon */}
      <div className="relative mt-6">
        <img 
          src="https://image.noelshack.com/fichiers/2025/09/5/1740776589-elsa.png" 
          alt="Elsa" 
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-indigo-500 shadow-[0px_0px_20px_#6366f1] transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 rounded-full border-4 border-indigo-500 opacity-50 blur-md"></div>
      </div>

      {/* Bouton stylisé avec effet néon */}
      <Link 
        to="/" 
        className="mt-6 bg-indigo-500 text-white font-semibold py-3 px-6 rounded-full shadow-[0px_0px_20px_#6366f1] hover:bg-indigo-400 hover:shadow-[0px_0px_30px_#818cf8] transition-all duration-300 text-lg"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default FanHelydia;
