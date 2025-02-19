const express = require('express');
const restaurantsRoutes = require('./restaurantsRoutes');
const router = express.Router();

router.use('/restaurants', restaurantsRoutes);

module.exports = router;