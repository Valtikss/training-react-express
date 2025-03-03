const express = require('express');
const router = express.Router();
const {getDishesByRestaurant} = require('../controllers/dishesController');
const {createDish} = require('../controllers/dishesController');

router.get('/:id/dishes', getDishesByRestaurant);
router.post('/:id/dishes', createDish);

module.exports = router;
