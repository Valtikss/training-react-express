const express = require('express');
const restaurantsController = require('../controllers/restaurantsController');
const router = express.Router();

router.get('/', restaurantsController.getRestaurants);
router.get('/:id', restaurantsController.getRestaurantById);

router.post('/', restaurantsController.createRestaurant);
router.put('/:id', restaurantsController.updateRestaurant);

module.exports = router;