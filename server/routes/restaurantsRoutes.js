const express = require('express');
const router = express.Router();
const {getRestaurants} = require('../controllers/restaurantsController');
const {getRestaurantById} = require('../controllers/restaurantsController');
const {createRestaurant} = require('../controllers/restaurantsController');
const {updateRestaurant} = require('../controllers/restaurantsController');
const {deleteRestaurant} = require('../controllers/restaurantsController');

router.get('/', getRestaurants);
router.get('/:id', getRestaurantById);
router.post('/', createRestaurant);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

module.exports = router;