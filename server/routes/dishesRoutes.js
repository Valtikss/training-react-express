const express = require('express');
const router = express.Router();
const {getDishesByRestaurant} = require('../controllers/dishesController');

router.get('/:id/dishes', getDishesByRestaurant);

module.exports = router;
