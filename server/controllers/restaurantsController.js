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

exports.createRestaurant = (req, res) => {
    const { name, address, cuisine, rating, phone, website, image } = req.body;

    if (!name || !address || !cuisine) {
        return res.status(400).json({ message: "Nom, adresse et type de cuisine sont requis." });
    }

    const newRestaurant = {
        id: restaurants.length + 1, // Génération d'un ID unique
        name,
        address,
        cuisine,
        rating: rating || 0,
        phone: phone || "N/A",
        website: website || "",
        image: image || "https://via.placeholder.com/150"
    };

    restaurants.push(newRestaurant);
    res.status(201).json(newRestaurant);
}