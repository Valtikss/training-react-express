import { createRestaurantSchema, emptyBodySchema } from "../dto";

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

export default router;
