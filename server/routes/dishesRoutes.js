const express = require("express");
const dishesController = require("../controllers/dishesController");
const router = express.Router();

router.get("/", dishesController.getAllDishes); 
router.get("/:id", dishesController.getDishById);
router.get("/restaurants/:id/dishes", dishesController.getDishesByRestaurant);
router.post("/restaurants/:id/dishes", dishesController.addDishToRestaurant);



module.exports = router;
