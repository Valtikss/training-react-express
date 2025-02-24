const express = require('express');
const restaurantsRoutes = require('./restaurantsRoutes');
const router = express.Router();

// Route test
router.use('/test', restaurantsRoutes);
router.use('/restaurants', restaurantsRoutes);


module.exports = router;