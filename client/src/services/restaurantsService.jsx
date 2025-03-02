import { getRestaurants } from "../api/restaurantsApi.jsx";

export const fetchRestaurants = async () => {
  try {
    const restaurants = await getRestaurants();
    return restaurants.map((restaurant) => ({
      ...restaurant,
      displayName: `${restaurant.name} (${restaurant.cuisine})`,
    }));
  } catch (error) {
    console.error("Service Error:", error);
    return [];
  }
};
