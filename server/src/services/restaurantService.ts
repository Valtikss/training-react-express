import {
  CreateRestaurantDTO,
  RestaurantDTO,
  UpdateRestaurantDTO,
} from "../dto";

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

const updateRestaurant = (id: number, restaurant: UpdateRestaurantDTO) => {
  const index = restaurants.findIndex((r) => r.id === id);
  if (index === -1) {
    return null;
  }
  restaurants[index] = { id, ...restaurant };
  return restaurants[index];
};

const deleteRestaurant = (id: number) => {
  const index = restaurants.findIndex((r) => r.id === id);
  if (index === -1) {
    return null;
  }
  const deletedRestaurant = restaurants[index];
  restaurants.splice(index, 1);
  return deletedRestaurant;
};

export const RestaurantService = {
  get: getRestaurants,
  getById: getRestaurantById,
  create: createRestaurant,
  update: updateRestaurant,
  delete: deleteRestaurant,
};
