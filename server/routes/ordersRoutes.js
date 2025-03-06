const express = require("express");
const router = express.Router();
const {createOrder} = require("../controllers/ordersController");
const {getOrders} = require("../controllers/ordersController");

router.post("/", createOrder);
router.get("/", getOrders);

module.exports = router;
