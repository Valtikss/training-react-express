const express = require("express");
const restaurantController = require("../controllers/restaurantController");
const router = express.Router();

router.get("/", restaurantController.getAllRestaurants); 
router.get("/:id", restaurantController.getRestaurantById); 

module.exports = router;
