const express = require('express');
const router = express.Router();
const {getRestaurants} = require('../controllers/restaurantsController');
const {getRestaurantById} = require('../controllers/restaurantsController');
const {createRestaurant} = require('../controllers/restaurantsController');

router.get('/', getRestaurants);
router.get('/:id', getRestaurantById);
router.post('/', createRestaurant);

module.exports = router;