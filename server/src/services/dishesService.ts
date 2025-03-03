import { CreateDishDTO, DishDTO } from "../dto";

import { RestaurantService } from "./restaurantService";

const getDishes = (restaurandId: number): DishDTO[] | null => {
  const restaurant = RestaurantService.getById(restaurandId);
  if (!restaurant) {
    return null;
  }
  return restaurant.dishes;
};

const getDishById = (restaurantId: number, dishId: number): DishDTO | null => {
  const dishes = getDishes(restaurantId);
  if (!dishes) {
    return null;
  }
  const dish = dishes.find((d) => d.id === dishId);
  if (!dish) {
    return null;
  }
  return dish;
};

const createDish = (
  restaurantId: number,
  dish: CreateDishDTO
): DishDTO | null => {
  const restaurant = RestaurantService.getById(restaurantId);
  if (!restaurant) {
    return null;
  }
  const id = restaurant.dishes.length + 1;
  const newDish = { id, ...dish };
  restaurant.dishes.push(newDish);
  return newDish;
};

const deleteDish = (restaurantId: number, dishId: number): DishDTO | null => {
  const restaurant = RestaurantService.getById(restaurantId);
  if (!restaurant) {
    return null;
  }
  const index = restaurant.dishes.findIndex((d) => d.id === dishId);
  if (index === -1) {
    return null;
  }
  const deletedDish = restaurant.dishes[index];
  restaurant.dishes.splice(index, 1);
  return deletedDish;
};

export const DishService = {
  get: getDishes,
  getById: getDishById,
  create: createDish,
  delete: deleteDish,
};
