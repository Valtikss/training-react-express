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

export async function createRestaurant(restaurant) {
    try {
        const response = await restaurants.createRestaurant(restaurant);
        return response;
    } catch(error) {
        console.error('Failed to create restaurant', error);
        throw new Error('Failed to create restaurant');
    }
};

export async function updateRestaurant(id, restaurant) {
    try {
        const response = await restaurants.updateRestaurant(id, restaurant);
        return response;
    } catch(error) {
        console.error('Failed to update restaurant', error);
        throw new Error('Failed to update restaurant');
    }
};

export async function deleteRestaurant(id) {
    try {
        const response = await restaurants.deleteRestaurant(id);
        return response;
    } catch(error) {
        console.error('Failed to delete restaurant', error);
        throw new Error('Failed to delete restaurant');
    }
};