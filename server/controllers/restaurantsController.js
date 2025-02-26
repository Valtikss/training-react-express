const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/restaurants.json');

function loadRestaurants() {
    try {
      const data = fs.readFileSync(dataPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Erreur de lecture du fichier JSON :', error);
      return [];
    }
}

function saveRestaurants(restaurants) {
    try {
      fs.writeFileSync(dataPath, JSON.stringify(restaurants, null, 2), 'utf8');
    } catch (error) {
      console.error('Erreur d\'écriture dans le fichier JSON :', error);
    }
}

exports.getAllRestaurants = (req, res) => {
    const restaurants = loadRestaurants();
    res.send(restaurants);
};

exports.getRestaurantById = (req, res) => {
    const restaurants = loadRestaurants();
    const restaurantId = parseInt(req.params.id, 10);
  
    const restaurant = restaurants.find((r) => r.id === restaurantId);
    if (!restaurant) {
        return res.status(404).send('Restaurant not found');
    }
    res.send(restaurant);
};

exports.createRestaurant = (req, res) => {
    const restaurants = loadRestaurants();
    const { name, address, cuisine, phone, website, image } = req.body;

    // Valider les champs
    const error = validateRestaurantData({ name, address, cuisine, phone, website, image });
    if (error) {
        return res.status(400).json({ error });
    }

    // Générer un nouvel ID
    const newId = restaurants.length > 0
        ? Math.max(...restaurants.map((r) => r.id)) + 1
        : 1;

    // Créer le restaurant
    const newRestaurant = {
        id: newId,
        name,
        address,
        cuisine,
        rating: 0,
        phone,
        website,
        image,
    };

    restaurants.push(newRestaurant);
    saveRestaurants(restaurants);

    res.status(201).json(newRestaurant);
};

/**
 * 🔍 Fonction de validation des données d'un restaurant
 * @param {Object} data - Données du restaurant
 * @returns {string|null} - Retourne un message d'erreur ou null si tout est valide
 */
function validateRestaurantData({ name, address, cuisine, phone, website, image }) {
    if (!name || !address || !cuisine || !phone || !website || !image) {
        return "Tous les champs sont obligatoires.";
    }

    if (!isValidString(name)) return "Le nom du restaurant ne peut pas être vide.";
    if (!isValidString(address)) return "L'adresse du restaurant ne peut pas être vide.";
    if (!isValidString(cuisine)) return "Le type de cuisine ne peut pas être vide.";
    if (!isValidPhone(phone)) return "Le numéro de téléphone doit contenir 10 chiffres.";
    if (!isValidURL(website)) return "L'URL du site web est invalide.";
    if (!isValidURL(image)) return "L'URL de l'image est invalide.";

    return null;
}

/**
 * Vérifie si une chaîne est valide (non vide après trim)
 */
function isValidString(value) {
    return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Vérifie si un numéro de téléphone est valide (10 chiffres)
 */
function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

/**
 * Vérifie si une URL est valide
 */
function isValidURL(url) {
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urlRegex.test(url);
}
