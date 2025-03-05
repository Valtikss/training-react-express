const express = require('express');
const restaurantsRoutes = require('./restaurantsRoutes');
const platsRoutes = require('./platsRoutes');
const router = express.Router();

router.use('/restaurants', restaurantsRoutes);
router.use('/plats', platsRoutes);

module.exports = router; 