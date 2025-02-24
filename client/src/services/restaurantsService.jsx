import * as restaurants from '../api/restaurantsApi';

export async function getAllRestaurants() {
    try {
        const response = await restaurants.getAllRestaurants();
        return response;
    } catch (error) {
        console.error('Erreur lors de la récupération des restaurants:', error);
        throw new Error('Erreur lors de la récupération des restaurants');
    }
};

export async function getRestaurantById(id) {
    try {
        const response = await restaurants.getRestaurantById(id);
        return response;
    } catch (error) {
        console.error('Erreur lors de la récupération du restaurant:', error);
        throw new Error('Erreur lors de la récupération du restaurant');
    }
};