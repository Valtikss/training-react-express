import React, { useEffect, useState } from "react";
import { getRestaurants } from "../services/restaurantsService";
import Restaurant from './Restaurant';

const RestaurantsList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRestaurants();
                setRestaurants(Array.isArray(response.data) ? response.data : []);
            } catch (e) {
                console.error('Error fetching data:', e);
                setRestaurants([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Restaurants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    [...Array(9)].map((_, index) => (
                        <div key={index} className="aspect-square bg-gray-100 rounded-xl animate-pulse"></div>
                    ))
                ) : (
                    Array.isArray(restaurants) && restaurants.length > 0 ? (
                        restaurants.map(restaurant => (
                            <Restaurant key={restaurant.id} restaurant={restaurant} />
                        ))
                    ) : (
                        <div>No restaurants found</div>
                    )
                )}
            </div>
        </section>
    );
};

export default RestaurantsList;