const express = require('express');
const platsController = require('../controllers/platsController');
const router = express.Router();

router.get('/', platsController.getPlats);
router.get('/:id', platsController.getPlatById);

module.exports = router;