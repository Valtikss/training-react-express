import { fetchRestaurants } from '../api/restaurantsApi';
import { fetchRestaurantById } from '../api/restaurantsApi';

export const getRestaurants = async () => {
    try {
        return await fetchRestaurants();
    } catch (error) {
        console.error('Erreur lors de la récupération des restaurants:', error);
        return null;
    }
};

export const getRestaurantById = async (id) => {
    try {
        return await fetchRestaurantById(id);
    } catch (error) {
        console.error("Erreur lors de la récupération du restaurant :", error);
        return null;
    }
};