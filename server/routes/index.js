const express = require('express');
const restaurantsRoutes = require('./restaurantsRoutes');
const dishesRoutes = require('./dishesRoutes');
const router = express.Router();

router.use('/restaurants', restaurantsRoutes);
router.use('/restaurants', dishesRoutes);

module.exports = router;