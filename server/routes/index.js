const express = require("express");
const restaurantRoutes = require("./restaurantRoutes");
const dishesRoutes = require("./dishesRoutes");

const router = express.Router();

router.use("/restaurants", restaurantRoutes);
router.use("/", dishesRoutes);

module.exports = router;
