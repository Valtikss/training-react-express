/**
 * @file index.ts
 * @description Main entry point for the routes
 */

import { Router } from "express";
import dishRoute from "./dishRoutes";
import restaurantRoutes from "./restaurantRoutes";
import statusRoutes from "./statusRoutes";
import testRoute from "./testRoute";

const router = Router();

router.use("/test", testRoute);
router.use("/status", statusRoutes);
router.use("/restaurants", restaurantRoutes);
router.use("/restaurants", dishRoute); // Router takes care of the restaurantId and dishId

export default router;
