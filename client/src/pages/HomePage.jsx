import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-black text-white px-6">
      
      {/* Titre principal */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-white drop-shadow-lg tracking-wide uppercase mb-10">
        CHOOSE YOUR FAVORITE ❤️
      </h1>

      {/* Conteneur des cartes */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 pb-10">
        
        {/* Helydia */}
        <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
            <Link to="/fanHelydia">
                {/* Image avec opacité réduite au hover */}
                <img 
                src="https://rahft.com/wp-content/uploads/Helydia.jpg" 
                alt="Helydia"
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl transition-opacity duration-300 group-hover:opacity-50"
                />
                
                {/* Texte caché au repos, visible au hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h1 className="text-2xl font-semibold text-white drop-shadow-lg">
                    Helydia
                </h1>
                </div>
            </Link>
        </div>



        {/* Madeline */}
        <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
          <Link to="/fanmadeline">
            <img 
              src="https://media.glamour.com/photos/66c35f746f61bff33c43080d/master/w_2560%2Cc_limit/449682050_331213926706451_5760546936462903925_n.jpg"
              alt="Madeline"
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="text-2xl font-semibold text-white drop-shadow-lg">Madeline</h1>
            </div>
          </Link>
        </div>

        {/* Elsa */}
        <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
          <Link to="/fanelsa ">
            <img 
              src="https://image.noelshack.com/fichiers/2025/09/5/1740776589-elsa.png" 
              alt="Elsa "
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-3xl transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="text-2xl font-semibold text-white drop-shadow-lg">Elsa</h1>
            </div>
          </Link>
        </div>

      </div>

      {/* Message et bouton de navigation */}
      <div className="text-center">
        <p className="text-lg font-light text-gray-300">
          There is no judgement here. i promise..
        </p>

        <Link to="/about">
          <button className="mt-6 bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:scale-110 hover:bg-red-600 transition-transform duration-300">
            About Us
          </button>
        </Link>
      </div>
      
    </div>
  );
};

export default Home;
