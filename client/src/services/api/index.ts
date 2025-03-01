import {
  createRestaurant,
  deleteRestaurant,
  getRestaurantById,
  getRestaurants,
  updateRestaurant,
} from "./restaurantApi";

export const restaurant = {
  getAll: getRestaurants,
  getById: getRestaurantById,
  create: createRestaurant,
  update: updateRestaurant,
  delete: deleteRestaurant,
};
