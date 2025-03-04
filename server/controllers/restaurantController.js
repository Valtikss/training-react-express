const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/restaurants.json");

// 🔹 Fonction pour lire le fichier JSON
const getRestaurantsFromFile = () => {
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
};

// 🔹 Fonction pour écrire dans le fichier JSON
const saveRestaurantsToFile = (restaurants) => {
  fs.writeFileSync(dataPath, JSON.stringify(restaurants, null, 2), "utf8");
};

// ✅ Récupérer tous les restaurants
exports.getAllRestaurants = (req, res) => {
  const restaurants = getRestaurantsFromFile();
  res.json(restaurants);
};

// ✅ Récupérer un restaurant par son ID
exports.getRestaurantById = (req, res) => {
  const restaurants = getRestaurantsFromFile();
  const { id } = req.params;
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant non trouvé" });
  }

  res.json(restaurant);
};

// ✅ Ajouter un restaurant
exports.addRestaurant = (req, res) => {
  const { name, address, cuisine, rating, phone, website, image } = req.body;
  const restaurants = getRestaurantsFromFile();

  // Vérifier que tous les champs sont remplis
  if (!name || !address || !cuisine || !rating || !phone || !website || !image) {
    return res.status(400).json({ error: "Tous les champs sont obligatoires" });
  }

  // Générer un nouvel ID unique
  const newId = restaurants.length > 0 ? Math.max(...restaurants.map((r) => r.id)) + 1 : 1;

  const newRestaurant = {
    id: newId,
    name,
    address,
    cuisine,
    rating: parseFloat(rating),
    phone,
    website,
    image,
  };

  restaurants.push(newRestaurant);
  saveRestaurantsToFile(restaurants);

  res.status(201).json(newRestaurant);
};

// ✅ Mettre à jour un restaurant
exports.updateRestaurant = (req, res) => {
  const { id } = req.params;
  const { name, address, cuisine, phone, rating, website, image } = req.body;
  let restaurants = getRestaurantsFromFile();

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

  saveRestaurantsToFile(restaurants);
  res.json({ message: "Restaurant mis à jour avec succès", restaurant: restaurants[restaurantIndex] });
};

// ✅ Supprimer un restaurant
exports.deleteRestaurant = (req, res) => {
  const { id } = req.params;
  let restaurants = getRestaurantsFromFile();

  const restaurantIndex = restaurants.findIndex((r) => r.id === parseInt(id));
  if (restaurantIndex === -1) {
    return res.status(404).json({ message: "Restaurant non trouvé" });
  }

  // 🔥 Suppression du restaurant
  restaurants.splice(restaurantIndex, 1);
  saveRestaurantsToFile(restaurants);

  res.json({ message: "Restaurant supprimé avec succès" });
};

