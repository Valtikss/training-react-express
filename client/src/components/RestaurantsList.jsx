import { useEffect, useState } from "react";

const RestaurantsList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("/api/restaurants")
            .then((res) => res.json())
            .then((data) => setRestaurants(data))
            .catch((err) => console.error("Erreur lors de la récupération des restaurants :", err));
    }, []);

    return (
        <div>
            <h2>Liste des Restaurants</h2>
            <ul>
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id}>
                        <strong>{restaurant.name}</strong> - {restaurant.address}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantsList;
