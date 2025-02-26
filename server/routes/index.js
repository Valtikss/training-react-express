const express = require('express');
const testRoutes = require('./testRoutes');
const router = express.Router();

// Route test
router.use('/test', testRoutes);

module.exports = router;