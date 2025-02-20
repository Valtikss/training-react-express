//import express
const express = require('express');

//création routeur
const router = express.Router();

const { test } = require('../controllers/testController');

//connexion route au controleur
router.get('/test', test);

//export pour utilisation
module.exports = router;