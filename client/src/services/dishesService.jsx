
import { getDishesByRestaurant } from "../api/dishesApi.jsx";

export const fetchDishesByRestaurant = async (restaurantId) => {
  try {
    return await getDishesByRestaurant(restaurantId);
  } catch (error) {
    console.error("Service Error - fetchDishesByRestaurant:", error);
    throw error;
  }
};
