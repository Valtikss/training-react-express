import { restaurants } from "../data";

const getRestaurants = () => {
  return restaurants;
};

const getRestaurantById = (id: Number) => {
  const restaurant = restaurants.find((r) => r.id === id);
  return restaurant;
};

export { getRestaurants, getRestaurantById };
