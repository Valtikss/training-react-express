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

exports.addDishToRestaurant = (req, res) => {
  const { id } = req.params;
  const { name, price, description, image } = req.body; 

  if (!name || !price) {
      return res.status(400).json({ message: "Le nom et le prix sont obligatoires." });
  }

  const dishes = getDishesFromFile(); 
  const newDish = {
      id: dishes.length + 1,
      restaurantId: parseInt(id),
      name,
      price: parseFloat(price),
      description: description || "",
      image: image || "https://via.placeholder.com/150", 
  };

  dishes.push(newDish); 
  fs.writeFileSync(dataPath, JSON.stringify(dishes, null, 2), "utf-8"); 

  res.status(201).json(newDish);
};

