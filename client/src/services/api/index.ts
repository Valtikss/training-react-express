import {
  createRestaurant,
  getRestaurantById,
  getRestaurants,
} from "./restaurantApi";

export const restaurant = {
  getAll: getRestaurants,
  getById: getRestaurantById,
  create: createRestaurant,
};
