const restaurants = require('../data/restaurants');

const getRestaurants = (req, res) => {
    res.json(restaurants);
};

module.exports = { getRestaurants };