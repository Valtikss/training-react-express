const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers/restaurantsController.js');

router.get('/restaurants', restaurantsController.getRestaurants);

module.exports = router;
