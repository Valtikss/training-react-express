const restaurants = require("../data/restaurants");

// Récupérer tous les restaurants
exports.getAllRestaurants = (req, res) => {
  res.json(restaurants);
};

// Récupérer un restaurant par son ID
exports.getRestaurantById = (req, res) => {
  const { id } = req.params;
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant non trouvé" });
  }

  res.json(restaurant);
};
