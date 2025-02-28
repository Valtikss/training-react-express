import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 text-white px-6">
      
      {/* Titre principal */}
      <h1 className="text-6xl md:text-7xl font-extrabold font-poppins text-center mb-10 drop-shadow-lg uppercase tracking-widest">
        SINJ
      </h1>

      {/* Conteneur des images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 pb-10">
        
        {/* Image 1 */}
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98ZwV6N-pS06JvK7q-Xq1CijNXVXxYoRL4Q&s" 
          alt="Image 1" 
          className="rounded-3xl w-64 h-64 md:w-80 md:h-80 shadow-lg transform hover:scale-105 transition-all duration-300"
        />

        {/* Image 2 */}
        <img 
          src="https://image.noelshack.com/fichiers/2025/09/5/1740774925-ez.png" 
          alt="Image 2" 
          className="rounded-3xl w-80 h-64 md:w-200 md:h-80 shadow-lg transform hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Bouton de retour */}
      <Link 
        to="/" 
        className="mt-4 bg-white text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300 text-lg"
      >
        ⬅ Back to Home
      </Link>
      
    </div>
  );
};

export default AboutPage;
