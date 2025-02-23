import React from "react";
import aboutImage from "../assets/images/about.jpg";
import about1Image from "../assets/images/about_1.jpg";
import about2Image from "../assets/images/about_2.jpg";
import about3Image from "../assets/images/about_3.jpg";

function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">            
            <main className="flex-1">
                <div className="relative h-[250px] sm:h-[350px] lg:h-[450px] mb-8 sm:mb-12 lg:mb-16">
                    <div className="absolute inset-0">
                        <img 
                            src={aboutImage}
                            alt="Delicious food spread"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-2xl mb-3 sm:mb-4">
                            Fonctionnement d'Uber Eats
                        </h1>
                        <h2 className="text-sm sm:text-base lg:text-lg max-w-xl">
                            Uber Eats est un moyen simple de vous faire livrer vos repas préférés.
                        </h2>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-2xl mb-8 sm:mb-12 lg:mb-16">
                        Comment utiliser l'application Uber Eats
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                        <div className="space-y-4 sm:space-y-6">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                                <img 
                                    src={about1Image}
                                    alt="Choisir son repas"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="space-y-2 sm:space-y-3">
                                <h3 className="text-lg sm:text-xl font-semibold">Faites votre choix</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Uber Eats rassemble des centaines de restaurants. Lorsque vous ouvrez l'application, 
                                    vous pouvez les faire défiler en quête d'inspiration, mais aussi rechercher un restaurant 
                                    ou un type de cuisine si vous savez ce dont vous avez envie.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                                <img 
                                    src={about2Image}
                                    alt="Commander"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="space-y-2 sm:space-y-3">
                                <h3 className="text-lg sm:text-xl font-semibold">Commandez</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Au moment du paiement, vous verrez votre adresse, l'heure de livraison estimée et le prix 
                                    de la commande. Si tout vous semble correct, appuyez sur Commander : c'est aussi simple que ça !
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                                <img 
                                    src={about3Image}
                                    alt="Suivre sa commande"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="space-y-2 sm:space-y-3">
                                <h3 className="text-lg sm:text-xl font-semibold">Suivez votre commande</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Suivez votre commande dans l'application. Vous pourrez voir que le restaurant accepte 
                                    la commande et commence à la préparer. Ensuite, lorsqu'elle sera quasiment prête, 
                                    un coursier à proximité se dirigera vers le restaurant pour la prendre en charge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AboutPage;