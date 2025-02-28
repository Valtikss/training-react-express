import { CreateRestaurantDTO, RestaurantDTO } from "../dto";

import { restaurants } from "../data";

const getRestaurants = () => {
  return restaurants;
};

const getRestaurantById = (id: Number) => {
  const restaurant = restaurants.find((r) => r.id === id);
  return restaurant;
};

const createRestaurant = (restaurant: CreateRestaurantDTO): RestaurantDTO => {
  const id = restaurants.length + 1;
  const newRestaurant = { id, ...restaurant };
  restaurants.push(newRestaurant);
  return newRestaurant;
};

export const RestaurantService = {
  get: getRestaurants,
  getById: getRestaurantById,
  create: createRestaurant,
};
