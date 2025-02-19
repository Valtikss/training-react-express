/**
 * @file index.ts
 * @description Main entry point for the routes
 */

import { Router } from "express";
import restaurantRoutes from "./restaurantRoutes";
import statusRoutes from "./statusRoutes";
import testRoute from "./testRoute";

const router = Router();

router.use("/test", testRoute);
router.use("/status", statusRoutes);
router.use("/restaurants", restaurantRoutes);

export default router;
