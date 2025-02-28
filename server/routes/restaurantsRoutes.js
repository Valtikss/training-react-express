const express = require('express');
const router = express.Router();
const {getRestaurants} = require('../controllers/restaurantsController');
const {getRestaurantById} = require('../controllers/restaurantsController');
const {createRestaurant} = require('../controllers/restaurantsController');
const {updateRestaurant} = require('../controllers/restaurantsController');

router.get('/', getRestaurants);
router.get('/:id', getRestaurantById);
router.post('/', createRestaurant);
router.put('/:id', updateRestaurant);

module.exports = router;