import * as restaurants from '../api/restaurantsApi';

export async function getRestaurants() {
    try {
        const response = await restaurants.getRestaurants();
        return response;
    } catch (e) {
        // Pour le dev
        console.e('Failed to get restaurants', e);
        throw new Error('Failed to get restaurants');
    }
}