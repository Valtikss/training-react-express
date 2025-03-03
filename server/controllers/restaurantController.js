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


exports.addRestaurant = (req, res) => {
  const { name, address, cuisine, rating, phone, website, image } = req.body;

  // Vérifier que tous les champs sont remplis
  if (!name || !address || !cuisine || !rating || !phone || !website || !image) {
    return res.status(400).json({ error: "Tous les champs sont obligatoires" });
  }

  // Créer un nouvel objet restaurant
  const newRestaurant = {
    id: restaurants.length + 1, 
    name,
    address,
    cuisine,
    rating: parseFloat(rating),
    phone,
    website,
    image,
  };

  restaurants.push(newRestaurant); 
  res.status(201).json(newRestaurant); 
};