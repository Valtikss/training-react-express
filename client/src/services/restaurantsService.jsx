import * as restaurants from '../api/restaurantsApi';

// Pause pour permettre de voir l'animation et surtout laisser un temps pour chare
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getRestaurants() {
    try {
        await delay(2000);

        // Simulation d'une erreur de fecth de data
        //throw new Error('Failed to fecth restaurants. Server is unavailable.');

        const response = await restaurants.getRestaurants();
        return response;
    } catch (e) {
        // Pour le dev
        console.e('Failed to get restaurants', e);
        throw new Error('Failed to get restaurants');
    }
}

export async function getRestaurantById(id) {
    try {
        const response = await restaurants.getRestaurantById(id);
        return response;
    } catch(e) {
        throw e;
    }
};