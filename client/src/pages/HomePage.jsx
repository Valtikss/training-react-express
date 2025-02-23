import React, { useEffect, useState } from "react";
import RestaurantsList from "../components/RestaurantsList";
import CategoriesList from "../components/CategoriesList";
import { getRestaurants } from "../services/restaurantsService";
import homeImage from "../assets/images/home.jpg";

function HomePage() {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await getRestaurants();
                setRestaurants(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurants();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 w-full">
                <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] mb-8 sm:mb-12 lg:mb-16">
                    <div className="absolute inset-0">
                        <img 
                            src={homeImage}
                            alt="Food delivery hero"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Vos restaurants préférés, livrés chez vous
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-white max-w-xl">
                            Découvrez les meilleurs restaurants de votre quartier et faites-vous livrer en quelques clics.
                        </p>
                    </div>
                </section>

                {!loading && <CategoriesList restaurants={restaurants} />}

                <RestaurantsList />
            </main>
        </div>
    );
}

export default HomePage;