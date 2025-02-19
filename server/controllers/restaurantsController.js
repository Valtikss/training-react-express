const restaurants = require('../data/restaurants');

exports.getAllRestaurants = (req, res) => {
    res.send(restaurants);
};