const restaurants = require('../data/restaurants');

exports.getRestaurants = (req, res) => {
    res.send(restaurants);
};