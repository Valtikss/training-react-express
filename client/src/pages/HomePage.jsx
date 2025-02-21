import React from "react";
import RestaurantsList from "../components/RestaurantsList";

function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Catégories</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="aspect-square bg-gray-100 rounded-xl animate-pulse"></div>
                        ))}
                    </div>
                </section>
                <RestaurantsList />
            </main>
        </div>
    );
}

export default HomePage;