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

exports.updateRestaurant = (req, res) => {
  const { id } = req.params;
  const { name, address, cuisine, phone, rating, website, image } = req.body;

  const restaurantIndex = restaurants.findIndex((r) => r.id === parseInt(id));
  if (restaurantIndex === -1) {
    return res.status(404).json({ message: "Restaurant non trouvé" });
  }

  const errors = {};
  if (!name || name.trim().length < 3) errors.name = "Le nom est requis.";
  if (!address) errors.address = "L'adresse est requise.";
  if (!cuisine) errors.cuisine = "Le type de cuisine est requis.";
  if (!phone) errors.phone = "Le numéro de téléphone est requis.";
  if (!website || !/^https?:\/\/.+\..+/.test(website)) errors.website = "URL invalide.";
  if (!image || !/^https?:\/\/.+\..+\/.+/.test(image)) errors.image = "URL de l'image invalide.";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // Mise à jour des données
  restaurants[restaurantIndex] = {
    ...restaurants[restaurantIndex],
    name,
    address,
    cuisine,
    phone,
    rating: parseFloat(rating),
    website,
    image,
  };

  res.json({ message: "Restaurant mis à jour avec succès", restaurant: restaurants[restaurantIndex] });
};