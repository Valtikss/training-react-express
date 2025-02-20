import React from "react";

function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">            
            <main className="flex-1">
                <div className="relative h-[500px] mb-16">
                    <div className="absolute inset-0">
                        <img 
                            src="../assets/about.jpg"
                            alt="Delicious food spread"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 h-full content-center items-center">
                        <h1 className="text-5xl font-bold text-white max-w-2xl mb-24">
                            Fonctionnement d'Uber Eats
                        </h1>
                        <h2 className="text-1xl font-solid text-white maw-w-1l">
                            Uber Eats est un moyen simple de vous faire livrer vos repas préférés.
                        </h2>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 mb-16">
                    <h1 className="text-5xl font-bold max-w-2l mb-24">Comment utiliser l'application Uber Eats</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <div className="aspect-square bg-gray-100 rounded-xl animate-pulse"></div>
                            <h2 className="text-2xl mb-6">Faites votre choix</h2>
                            <p className="text-gray-600 leading-relaxed">
                            Uber Eats rassemble des centaines de restaurants. Lorsque vous ouvrez l'application, vous pouvez les faire défiler en quête d'inspiration, mais aussi rechercher un restaurant ou un type de cuisine si vous savez ce dont vous avez envie. Vous avez trouvé un plat qui vous plaît ? Il vous suffit d'appuyer dessus pour l'ajouter à votre commande.
                            </p>
                        </div>
                        <div>
                            <div className="aspect-square bg-gray-100 rounded-xl animate-pulse"></div>
                            <h2 className="text-2xl mb-6">Commandez</h2>
                            <p className="text-gray-600 leading-relaxed">
                            Au moment du paiement, vous verrez votre adresse, l'heure de livraison estimée et le prix de la commande (taxes et frais de livraison inclus). Si tout vous semble correct, appuyez sur Commander : c'est aussi simple que ça ! Vous pouvez utiliser les mêmes moyens de paiement que pour les courses avec Uber.
                            </p>
                        </div>
                        <div>
                            <div className="aspect-square bg-gray-100 rounded-xl animate-pulse"></div>
                            <h2 className="text-2xl mb-6">Suivez votre commande</h2>
                            <p className="text-gray-600 leading-relaxed">
                            Suivez votre commande dans l'application. Vous pourrez d'abord voir que le restaurant accepte la commande et commence à la préparer. Ensuite, lorsqu'elle sera quasiment prête, un coursier à proximité se dirigera vers le restaurant (en voiture, à vélo ou à scooter selon votre région) pour la prendre en charge. Enfin, il se rendra à votre adresse. Vous pourrez voir son nom et sa photo, ainsi que sa progression sur la carte.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AboutPage;