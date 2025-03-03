const dishes = require('../data/dishes');

exports.getDishesByRestaurant = (req, res) => {
    const restaurantId = parseInt(req.params.id);
    const restaurantDishes = dishes.filter(dish => dish.restaurantId === restaurantId);

    res.json(restaurantDishes);
};