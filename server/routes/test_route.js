const express = require('express');
const router = express.Router();

router.get('/test_route', (req, res) => {
    res.json({ status: "ok" });
});

module.exports = router;