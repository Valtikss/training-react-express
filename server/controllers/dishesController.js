const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/dishes.json");

const getDishesFromFile = () => {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
};

exports.getAllDishes = (req, res) => {
  const dishes = getDishesFromFile();
  res.json(dishes);
};

exports.getDishById = (req, res) => {
  const { id } = req.params;
  const dishes = getDishesFromFile();
  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) {
    return res.status(404).json({ message: "Plat non trouvé" });
  }

  res.json(dish);
};

exports.getDishesByRestaurant = (req, res) => {
const { id } = req.params;
const dishes = getDishesFromFile();
const restaurantDishes = dishes.filter((dish) => dish.restaurantId === parseInt(id));

res.json(restaurantDishes);

};
