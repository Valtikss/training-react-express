const restaurants = require('../data/restaurants.js'); // ATTENTION A LEXTENSION .JS DE FDP HEIN UNE FOIS PAS DEUX

exports.getAllRestaurants = (req, res) => {
    res.send(restaurants);
};