import { Request, Response } from "express";

import { CreateDishDTO } from "../dto";
import { DishService } from "../services";

const DishController = {
  // Get all dishes
  getDishes: async (req: Request, res: Response) => {
    const restaurantId = parseInt(req.params.restaurantId, 10);
    const dishesList = DishService.get(restaurantId);
    if (dishesList === null) {
      res.status(404).send("Restaurant not found");
      return;
    }
    res.json(dishesList);
  },

  // Create a new dish
  createDish: async (req: Request, res: Response) => {
    const restaurantId = parseInt(req.params.restaurantId);
    const dish: CreateDishDTO = req.body;

    const newDish = DishService.create(restaurantId, dish);

    res.status(201).json(newDish);
  },

  // Get a dish by id
  getDishById: async (req: Request, res: Response) => {
    const restaurantId = parseInt(req.params.restaurantId);
    const dishId = parseInt(req.params.dishId);
    const dish = DishService.getById(restaurantId, dishId);
    if (dish) {
      res.json(dish);
    } else {
      res.status(404).send("Dish not found");
    }
  },

  // Delete a dish
  deleteDish: async (req: Request, res: Response) => {
    const restaurantId = parseInt(req.params.restaurantId);
    const dishId = parseInt(req.params.dishId);
    const deleted = DishService.delete(restaurantId, dishId);
    if (!deleted) {
      res.status(404).send("Dish or restaurant not found not found");
      return;
    }
    res.status(200).json(deleted);
  },
};

export default DishController;
