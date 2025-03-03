const dishes = require('../data/dishes');

exports.getDishesByRestaurant = (req, res) => {
    const restaurantId = parseInt(req.params.id);
    const restaurantDishes = dishes.filter(dish => dish.restaurantId === restaurantId);

    res.json(restaurantDishes);
};

exports.createDish = (req, res) => {
    const restaurantId = parseInt(req.params.id);
    const { name, price, description } = req.body;

    if (!name || name.trim().length === 0) {
        return res.status(400).json({ message: "Le nom du plat est obligatoire." });
    }
    if (!price || isNaN(price) || price <= 0) {
        return res.status(400).json({ message: "Le prix est obligatoire et doit être positif." });
    }

    const newDish = {
        id: dishes.length + 1,
        restaurantId,
        name,
        price,
        description: description || "Pas de description."
    };

    dishes.push(newDish);
    res.status(201).json({ message: "Plat ajouté avec succès.", dish: newDish });
};