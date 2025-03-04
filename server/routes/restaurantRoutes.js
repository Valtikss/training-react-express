const express = require("express");
const restaurantController = require("../controllers/restaurantController");
const router = express.Router();

router.get("/", restaurantController.getAllRestaurants); 
router.get("/:id", restaurantController.getRestaurantById); 
router.post("/", restaurantController.addRestaurant);
router.put("/:id", restaurantController.updateRestaurant);
router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;
