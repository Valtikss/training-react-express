const restaurants = require('../data/restaurants');

exports.getAllRestaurants = (req, res) => {
    res.send(restaurants);
};

exports.getRestaurantById = (req, res) => {
    const restaurant = restaurants.find((restaurant) => restaurant.id === parseInt(req.params.id));
    if (!restaurant) {
        res.status(404).send('Restaurant not found');
    } else {
        res.send(restaurant);
    }
};