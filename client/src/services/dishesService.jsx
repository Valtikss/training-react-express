import { fetchDishesByRestaurant } from '../api/dishesApi';

export const getDishesByRestaurant = async (restaurantId) => {
    try {
        return await fetchDishesByRestaurant(restaurantId);
    } catch (error) {
        console.error("Erreur lors de la récupération des plats :", error);
        return null;
    }
};
