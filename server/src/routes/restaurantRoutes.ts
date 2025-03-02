import {
  createRestaurantSchema,
  emptyBodySchema,
  updateRestaurantSchema,
} from "../dto";

import { RestaurantController } from "../controllers";
import { Router } from "express";
import { zodValidate } from "../middlewares";

const router = Router();

router.get(
  "/",
  zodValidate(emptyBodySchema),
  RestaurantController.getRestaurants
);

router.post(
  "/",
  zodValidate(createRestaurantSchema),
  RestaurantController.createRestaurant
);

router.get(
  "/:restaurantId",
  zodValidate(emptyBodySchema),
  RestaurantController.getRestaurantById
);

router.put(
  "/:restaurantId",
  zodValidate(updateRestaurantSchema),
  RestaurantController.updateRestaurant
);

router.delete(
  "/:restaurantId",
  zodValidate(emptyBodySchema),
  RestaurantController.deleteRestaurant
);

export default router;
