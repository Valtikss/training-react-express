import React from 'react';

const AboutPage = () => {
    return (
        
        <div className="pt-30 min-h-screen flex flex-col items-center justify-center text-black p-6">
            {/* Titre stylisé */}
            <h1 className="text-5xl text-white font-extrabold drop-shadow-[4px_4px_0px_#000] text-center">
                🍢 À PROPOS DE KEBABZ 🍢
            </h1>

            {/* Image d'illustration (Kebab cartoon) */}
            <img 
                src="https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kebab délicieux"
                className="w-80 h-80 rounded-full border-4 border-black shadow-[8px_8px_0px_#000] mt-6"
            />

            {/* Description du projet */}
            <p className="text-center text-white text-xl font-bold mt-6 max-w-2xl drop-shadow-[3px_3px_0px_#000]">
                Ici, on ne sélectionne que les **meilleures broches de la ville** !  
            </p>

            {/* Lien GitHub avec effet cartoon */}
            <a 
                href="https://github.com/stick-eth"
                target="_blank"
                rel="noreferrer"
                className="mt-6 bg-red-500 text-white text-xl font-bold px-6 py-3 rounded-xl border-4 border-black 
                           shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] 
                           hover:shadow-[2px_2px_0px_#000] transition-all duration-200"
            >
                🚀 PUB VERS MON GITHUB - ABONNEZ-VOUS !
            </a>

            {/* Espace bas pour équilibrer */}
            <div style={{ height: '200px' }}></div>
        </div>
    );
};

export default AboutPage;
