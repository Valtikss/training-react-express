import React from "react";

function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Catégories</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {/* Placeholder for category cards */}
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="aspect-square bg-gray-100 rounded-xl animate-pulse"></div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4">Restaurants</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Placeholder for restaurant cards */}
                        {[...Array(9)].map((_, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="aspect-[4/3] bg-gray-100 rounded-xl mb-2 animate-pulse"></div>
                                <div className="h-4 bg-gray-100 rounded w-2/3 mb-2 animate-pulse"></div>
                                <div className="h-4 bg-gray-100 rounded w-1/2 animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default HomePage;