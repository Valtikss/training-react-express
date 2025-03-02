import { createDishSchema, emptyBodySchema, updateDishSchema } from "../dto";
import e, { Router } from "express";

import { DishController } from "../controllers";
import { zodValidate } from "../middlewares";

const router = Router();

router.get(
  "/:restaurantId/dishes",
  zodValidate(emptyBodySchema),
  DishController.getDishes
);

router.post(
  "/:restaurantId/dishes",
  zodValidate(createDishSchema),
  DishController.createDish
);

router.get(
  "/:restaurantId/dishes/:dishId",
  zodValidate(emptyBodySchema),
  DishController.getDishById
);

export default router;
