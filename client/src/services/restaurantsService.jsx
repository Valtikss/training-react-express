import * as restaurants from '../api/restaurantsApi';

export async function getAllRestaurants() {
    try {
        const response = await restaurants.getAllRestaurants();
        return response;
    } catch (error) {
        console.error('Erreur lors de la récupération des restaurants:', error);
        throw new Error('Erreur lors de la récupération des restaurants');
    }
}