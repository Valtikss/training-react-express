import { CreateRestaurantDTO, UpdateRestaurantDTO } from "../dto";
import { Request, Response } from "express";

import { RestaurantService } from "../services";

const RestaurantController = {
  // Get all restaurants
  getRestaurants: async (_: Request, res: Response) => {
    res.json(RestaurantService.get());
  },

  // Create a new restaurant
  createRestaurant: async (req: Request, res: Response) => {
    // Trop marrant RES de response et taurant comme RESTAURANT ahahaha
    const REStaurant: CreateRestaurantDTO = req.body;

    const newRestaurant = RestaurantService.create(REStaurant);

    res.status(201).json(newRestaurant);
  },

  // Get a restaurant by id
  getRestaurantById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.restaurantId);
    const restaurant = RestaurantService.getById(id);
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).send("Restaurant not found");
    }
  },

  // Update a restaurant
  updateRestaurant: async (req: Request, res: Response) => {
    const id = parseInt(req.params.restaurantId);
    const REStaurant: UpdateRestaurantDTO = req.body;

    const updatedRestaurant = RestaurantService.update(id, REStaurant);

    if (updatedRestaurant) {
      res.json(updatedRestaurant);
    } else {
      res.status(404).send("Restaurant not found");
    }
  },

  // Delete a restaurant
  deleteRestaurant: async (req: Request, res: Response) => {
    const id = parseInt(req.params.restaurantId);
    const deletedRestaurant = RestaurantService.delete(id);

    if (deletedRestaurant) {
      res.json(deletedRestaurant);
    } else {
      res.status(404).send("Restaurant not found");
    }
  },
};

export default RestaurantController;
