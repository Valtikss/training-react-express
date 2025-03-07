const express = require('express');
const restaurantsRoutes = require('./restaurantsRoutes');
const dishesRoutes = require('./dishesRoutes');
const ordersRoutes = require('./ordersRoutes');
const router = express.Router();

router.use('/restaurants', restaurantsRoutes);
router.use('/restaurants', dishesRoutes);
router.use('/orders', ordersRoutes);

module.exports = router;