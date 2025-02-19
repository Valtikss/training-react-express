import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-50 px-8 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 mb-12">
                <div>
                    <ul className="space-y-4">
                        <li><a href="/" className="text-gray-500 hover:text-black">Obtenir de l'aide</a></li>
                        <li><a href="/" className="text-gray-500 hover:text-black">Ajoutez votre restaurant</a></li>
                        <li><a href="/" className="text-gray-500 hover:text-black">Devenez coursier-partenaire</a></li>
                        <li><a href="/" className="text-gray-500 hover:text-black">Créez un compte professionnel</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-4">
                        <li><a href="/" className="text-gray-500 hover:text-black">Restaurants à proximité</a></li>
                        <li><a href="/" className="text-gray-500 hover:text-black">Afficher toutes les villes</a></li>
                        <li><a href="/" className="text-gray-500 hover:text-black">Tous les pays</a></li>
                        <li><a href="/" className="text-gray-500 hover:text-black">Commandes à récupérer à proximité</a></li>
                        <li><a href="/" className="text-gray-500 hover:text-black">À propos d'Uber&nbsp;Eats</a></li>
                        <li><a href="/" className="text-gray-500 hover:text-black">Faites vos courses</a></li>
                    </ul>
                </div>
                <div>
                    <div className="flex flex-col space-y-4">
                        <a href="/" className="text-gray-500 hover:text-black">Fonctionnement des sites et des applications Uber et Uber Eats</a>
                        <a href="/" className="text-gray-500 hover:text-black">Politique de confidentialité</a>
                        <a href="/" className="text-gray-500 hover:text-black">Conditions</a>
                        <a href="/" className="text-gray-500 hover:text-black">Tarifs</a>
                        <a href="/" className="text-gray-500 hover:text-black">Ne vendez pas et ne partagez pas mes informations personnelles.</a>
                    </div>
                </div>
            </div>
            <div className="text-gray-500 text-sm border-t border-gray-200 pt-8">
                © 2025 Uber Technologies Inc.
            </div>
        </footer>
    );
}

export default Footer;