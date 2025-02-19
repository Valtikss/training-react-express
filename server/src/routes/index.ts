/**
 * @file index.ts
 * @description Main entry point for the routes
 */

import { Router } from "express";
import statusRoutes from "./statusRoutes";
import testRoute from "./testRoute";

const router = Router();

router.use("/test", testRoute);
router.use("/status", statusRoutes);

export default router;
