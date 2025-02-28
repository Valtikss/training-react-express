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

    if (name.trim().length === 0) {
        return res.status(400).json({ message: "Le nom est requis et ne peut pas être composé uniquement d'espaces." });
    }

    if (!address || !cuisine) {
        return res.status(400).json({ message: "Adresse et type de cuisine sont requis." });
    }

    if (rating == undefined || rating < 0 || rating > 5) {
        return res.status(400).json({ 
            message: "La note doit être comprise entre 0 et 5." 
        });
    }

    const phoneRegex = /^\+\d[\d\s]*$/;
    if (phone && !phoneRegex.test(phone)) {
        return res.status(400).json({ message: "Le numéro de téléphone doit commencer par '+' suivi uniquement de chiffres." });
    }

    if (website && !website.startsWith("https://")) {
        return res.status(400).json({ message: "L'URL du site web doit commencer par 'https://'." });
    }

    const newRestaurant = {
        id: restaurants.length + 1,
        name: name.trim(), // Supprime les espaces inutiles
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

exports.updateRestaurant = (req, res) => {
    const restaurantId = parseInt(req.params.id);
    const { name, address, cuisine, rating, phone, website, image } = req.body;
    const restaurantIndex = restaurants.findIndex(r => r.id === restaurantId);

    if (restaurantIndex === -1) {
        return res.status(404).json({ message: "Restaurant non trouvé" });
    }

    // Mise à jour des champs fournis
    if (name.trim().length === 0) {
        return res.status(400).json({ message: "Le nom est requis et ne peut pas être composé uniquement d'espaces." });
    } else {
        restaurants[restaurantIndex].name = name.trim();
    }

    if (!address || !cuisine) {
        return res.status(400).json({ message: "Adresse et type de cuisine sont requis." });
    } else {
        restaurants[restaurantIndex].address = address.trim();
        restaurants[restaurantIndex].cuisine = cuisine.trim();
    }

    if (rating == undefined || rating < 0 || rating > 5) {
        return res.status(400).json({ message: "La note doit être comprise entre 0 et 5." });
    } else {
        restaurants[restaurantIndex].rating = rating;
    }

    const phoneRegex = /^\+\d[\d\s]*$/;
    if (phone && !phoneRegex.test(phone)) {
        return res.status(400).json({ message: "Le numéro de téléphone doit commencer par '+' suivi uniquement de chiffres et espaces." });
    } else {
        restaurants[restaurantIndex].phone = phone;
    }

    if (website && !website.startsWith("https://")) {
        return res.status(400).json({ message: "L'URL du site web doit commencer par 'https://'." });
    } else {
        restaurants[restaurantIndex].website = website;
    }

    if (image) restaurants[restaurantIndex].image = image;

    res.json(restaurants[restaurantIndex]);
};