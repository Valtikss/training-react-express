const express = require('express');
const testRoutes = require('./testRoutes')
const router = express.Router();

router.get('/test', testRoutes);

module.exports = router; 