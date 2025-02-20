import * as restaurants from '../api/restaurantsApi';

export async function getAllRestaurants() {
    try {
        return await restaurants.getAllRestaurants();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}