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

exports.createRestaurant = (req, res) => {
  const restaurants = loadRestaurants();
  const newRestaurant = req.body;

  newRestaurant.id = restaurants.length ? restaurants[restaurants.length - 1].id + 1 : 1;
  restaurants.push(newRestaurant);

  fs.writeFileSync(dataPath, JSON.stringify(restaurants, null, 2), 'utf8');

  res.status(201).send(newRestaurant);
};

exports.updateRestaurant = (req, res) => {
    const restaurants = loadRestaurants();
    const restaurantId = parseInt(req.params.id, 10);
    const updatedData = req.body;

    const index = restaurants.findIndex((r) => r.id === restaurantId);
    if (index === -1) {
        return res.status(404).send('Restaurant not found');
    }

    restaurants[index] = {
        ...updatedData,
        id: restaurantId
    };

    fs.writeFileSync(dataPath, JSON.stringify(restaurants, null, 2), 'utf8');
    res.send(restaurants[index]);
};

exports.deleteRestaurant = (req, res) => {
  console.log('Delete request received for restaurant ID:', req.params.id);
  const restaurants = loadRestaurants();
  console.log('Loaded restaurants:', restaurants);
  const restaurantId = parseInt(req.params.id, 10);
  console.log('Looking for restaurant with ID:', restaurantId);

  const index = restaurants.findIndex((r) => r.id === restaurantId);
  console.log('Found restaurant at index:', index);

  if (index === -1) {
    console.log('Restaurant not found');
    return res.status(404).send('Restaurant not found');
  }

  restaurants.splice(index, 1);
  console.log('Restaurant removed, saving updated list');

  fs.writeFileSync(dataPath, JSON.stringify(restaurants, null, 2), 'utf8');
  console.log('File saved successfully');

  res.status(204).send();
};