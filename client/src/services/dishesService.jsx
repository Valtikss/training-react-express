
import { getDishesByRestaurant } from "../api/dishesApi.jsx";
import { addDishToRestaurant as apiAddDishToRestaurant } from "../api/dishesApi.jsx";


export const fetchDishesByRestaurant = async (restaurantId) => {
  try {
    return await getDishesByRestaurant(restaurantId);
  } catch (error) {
    console.error("Service Error - fetchDishesByRestaurant:", error);
    throw error;
  }
};

export const addDishToRestaurant = async (restaurantId, dishData) => {
  try {
    return await apiAddDishToRestaurant(restaurantId, dishData);
  } catch (error) {
    console.error("Service Error - addDishToRestaurant:", error);
    throw error;
  }
};

