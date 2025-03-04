import { fetchDishesByRestaurant } from '../api/dishesApi';
import { createDish } from '../api/dishesApi';

export const getDishesByRestaurant = async (restaurantId) => {
    try {
        return await fetchDishesByRestaurant(restaurantId);
    } catch (error) {
        console.error("Erreur lors de la récupération des plats :", error);
        return null;
    }
};

export const addDish = async (restaurantId, dishData) => {
    try {
        return await createDish(restaurantId, dishData);
    } catch (error) {
        console.error("Erreur lors de l'ajout du plat :", error);
        return null;
    }
};