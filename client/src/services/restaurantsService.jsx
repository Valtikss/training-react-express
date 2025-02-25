import { fetchRestaurants } from '../api/restaurantsApi';

export const getRestaurants = async () => {
    try {
        const response = await fetchRestaurants();
        return response;
    } catch (error) {
        console.error('Erreur lors de la récupération des restaurants:', error);
        throw new Error('Erreur lors de la récupération des restaurants');
    }
};

export const getRestaurantById = async (id) => {
    try {
        const restaurants = await fetchRestaurants();
        return restaurants.find((restaurant) => restaurant.id === parseInt(id));
    } catch (error) {
        console.error("Impossible de récupérer le restaurant :", error);
        throw new Error('Impossible de récupérer le restaurant');
    }
};