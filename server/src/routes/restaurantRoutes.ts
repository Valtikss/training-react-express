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
  "/:id",
  zodValidate(emptyBodySchema),
  RestaurantController.getRestaurantById
);

router.put(
  "/:id",
  zodValidate(updateRestaurantSchema),
  RestaurantController.updateRestaurant
);

router.delete(
  "/:id",
  zodValidate(emptyBodySchema),
  RestaurantController.deleteRestaurant
);

export default router;
