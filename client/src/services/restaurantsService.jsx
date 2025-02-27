import { fetchRestaurants } from '../api/restaurantsApi';
import { fetchRestaurantById } from '../api/restaurantsApi';
import { createRestaurant } from '../api/restaurantsApi';
import { updateRestaurant } from '../api/restaurantsApi';

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

export const addRestaurant = async (restaurantData) => {
    try {
        return await createRestaurant(restaurantData);
    } catch (error) {
        console.error("Erreur lors de l'ajout du restaurant :", error);
        return null;
    }
};

export const editRestaurant = async (id, restaurantData) => {
    try {
        return await updateRestaurant(id, restaurantData);
    } catch (error) {
        console.error("Erreur lors de la modification du restaurant :", error);
        return null;
    }
};