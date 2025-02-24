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
    if (!name || !address || !cuisine || !phone || !website || !image) {
        res.status(400).send('Missing required fields');
    } else {
        const newId = restaurants.length > 0
            ? Math.max(...restaurants.map((r) => r.id)) + 1
            : 1;

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
        res.status(201).send(newRestaurant);
    }
};