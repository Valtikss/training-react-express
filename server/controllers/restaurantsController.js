const restaurants = require('../data/restaurants');

exports.getRestaurants = (req, res) => {
    res.send(restaurants);
};

exports.getRestaurantById = (req, res) => {
    const restaurantId = parseInt(req.params.id); // Récupérer l'ID depuis l'URL
    const restaurant = restaurants.find(r => r.id === restaurantId);

    if (!restaurant) {
        return res.status(404).json({ message: "Restaurant non trouvé" });
    }

    res.send(restaurant);
};