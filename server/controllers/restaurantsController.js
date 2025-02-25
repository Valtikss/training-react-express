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

exports.getRestaurants = (req, res) => {
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