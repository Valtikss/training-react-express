import { createDish, deleteDish, getDishById, getDishes } from "./dishesApi";
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurantById,
  getRestaurants,
  updateRestaurant,
} from "./restaurantApi";

export const restaurantAPI = {
  getAll: getRestaurants,
  getById: getRestaurantById,
  create: createRestaurant,
  update: updateRestaurant,
  delete: deleteRestaurant,
};

export const dishApi = {
  getAll: getDishes,
  getById: getDishById,
  create: createDish,
  delete: deleteDish,
};
