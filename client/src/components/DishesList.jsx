import React, { useState, useEffect, useContext } from 'react';
import { getDishesByRestaurant } from '../services/dishesService';
import { CartContext } from '../context/CartContext';

const DishesList = ({ restaurantId }) => {
    const [dishes, setDishes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const loadDishes = async () => {
            try {
                const data = await getDishesByRestaurant(restaurantId);
                setDishes(data);
            } catch (err) {
                setError("Erreur lors du chargement des plats.");
            } finally {
                setIsLoading(false);
            }
        };
        loadDishes();
    }, [restaurantId]);

    if (isLoading) {
        return <p className="text-center text-blue-500 text-xl">Chargement...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="mt-5">
            <h3 className="text-xl font-bold mb-3">Menu du restaurant</h3>
            {dishes.length > 0 ? (
                <ul className="mt-2 space-y-2">
                    {dishes.map(dish => (
                        <li key={dish.id} className="border p-3 rounded shadow">
                            <h4 className="font-semibold">{dish.name}</h4>
                            <p className="text-sm text-gray-600">{dish.description}</p>
                            <p className="text-green-500 font-bold">{dish.price} €</p>
                            <button
                                onClick={() => addToCart(dish)}
                                className="bg-blue-500 text-white p-2 rounded mt-2"
                            >
                                Ajouter au panier
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">Aucun plat disponible.</p>
            )}
        </div>
    );
};

export default DishesList;
