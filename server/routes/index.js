const express = require('express');
const testRoutes = require('./testRoutes');
const restaurantsRoutes = require('./restaurantsRoutes');
const router = express.Router();

// Route test
router.use('/test', testRoutes);
router.use('/restaurants', restaurantsRoutes);


module.exports = router;