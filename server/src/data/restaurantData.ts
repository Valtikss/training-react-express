import { Restaurant } from "../types";

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Le Gourmet Parisien",
    address: "15 Rue de la Paix, 75002 Paris, France",
    cuisine: "Française",
    rating: 4.8,
    phone: "+33 1 23 45 67 89",
    website: "https://legourmetparisien.fr",
    image:
      "https://images.pexels.com/photos/2574489/pexels-photo-2574489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      {
        id: 1,
        name: "Coq au Vin",
        price: 25.0,
        description: "Traditional French chicken stew with red wine.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        name: "Crème Brûlée",
        price: 10.0,
        description: "Classic French dessert with a caramelized sugar top.",
        image:
          "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 2,
    name: "Sakura Sushi",
    address: "22 Av. de Tokyo, 75016 Paris, France",
    cuisine: "Japonaise",
    rating: 4.6,
    phone: "+33 1 98 76 54 32",
    website: "https://sakurasushi.fr",
    image:
      "https://images.pexels.com/photos/3763816/pexels-photo-3763816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      {
        id: 3,
        name: "Sushi Platter",
        price: 30.0,
        description: "Assorted sushi platter with fresh fish.",
        image:
          "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 4,
        name: "Miso Soup",
        price: 5.0,
        description: "Traditional Japanese soup with tofu and seaweed.",
        image:
          "https://images.pexels.com/photos/2098086/pexels-photo-2098086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 3,
    name: "Pasta Bella",
    address: "5 Via Roma, 20121 Milan, Italie",
    cuisine: "Italienne",
    rating: 4.7,
    phone: "+39 02 1234 5678",
    website: "https://pastabella.it",
    image:
      "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      {
        id: 5,
        name: "Spaghetti Carbonara",
        price: 18.0,
        description:
          "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
        image:
          "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 6,
        name: "Tiramisu",
        price: 8.0,
        description: "Traditional Italian coffee-flavored dessert.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 4,
    name: "El Asador Argentino",
    address: "48 Calle Mayor, 28013 Madrid, Espagne",
    cuisine: "Argentine",
    rating: 4.5,
    phone: "+34 91 876 54 32",
    website: "https://elasador.com",
    image:
      "https://images.pexels.com/photos/19911406/pexels-photo-19911406/free-photo-of-alcool-boire-verre-biere.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      {
        id: 7,
        name: "Asado",
        price: 35.0,
        description: "Traditional Argentine barbecue with various meats.",
        image:
          "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 8,
        name: "Empanadas",
        price: 12.0,
        description:
          "Argentine pastries filled with meat, cheese, or vegetables.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 5,
    name: "The Burger House",
    address: "102 King Street, London, UK",
    cuisine: "Américaine",
    rating: 4.3,
    phone: "+44 20 1234 5678",
    website: "https://theburgerhouse.co.uk",
    image:
      "https://images.pexels.com/photos/17312399/pexels-photo-17312399/free-photo-of-nourriture-aliments-repas-hamburger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      {
        id: 9,
        name: "Classic Burger",
        price: 15.0,
        description: "Juicy beef burger with lettuce, tomato, and cheese.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 10,
        name: "Fries",
        price: 5.0,
        description: "Crispy golden fries.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 6,
    name: "Dragon Wok",
    address: "66 Chinatown Street, 10012 New York, USA",
    cuisine: "Chinoise",
    rating: 4.6,
    phone: "+1 212-555-7890",
    website: "https://dragonwok.com",
    image:
      "https://images.pexels.com/photos/29325605/pexels-photo-29325605/free-photo-of-soiree-animee-au-restaurant-chinois-toyohashi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      {
        id: 11,
        name: "Kung Pao Chicken",
        price: 20.0,
        description: "Spicy stir-fried chicken with peanuts and vegetables.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 12,
        name: "Spring Rolls",
        price: 8.0,
        description: "Crispy rolls filled with vegetables and meat.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 7,
    name: "Taj Mahal Delights",
    address: "23 Connaught Place, New Delhi, India",
    cuisine: "Indienne",
    rating: 4.9,
    phone: "+91 11 9876 5432",
    website: "https://tajmahaldining.com",
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      {
        id: 13,
        name: "Butter Chicken",
        price: 18.0,
        description: "Creamy tomato-based chicken curry.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 14,
        name: "Naan",
        price: 5.0,
        description: "Traditional Indian flatbread.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 8,
    name: "La Taquería Mexicana",
    address: "9 Avenida Reforma, 01010 Mexico City, Mexique",
    cuisine: "Mexicaine",
    rating: 4.7,
    phone: "+52 55 1234 5678",
    website: "https://lataqueria.com.mx",
    image:
      "https://images.pexels.com/photos/7772200/pexels-photo-7772200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      {
        id: 15,
        name: "Tacos al Pastor",
        price: 12.0,
        description: "Marinated pork tacos with pineapple.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 16,
        name: "Guacamole",
        price: 8.0,
        description: "Fresh avocado dip with tomatoes, onions, and cilantro.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 9,
    name: "In n out",
    address: "10 Great George St, London, UK",
    cuisine: "Anglaise",
    rating: 4.5,
    phone: "+44 56 4321 6587",
    website: "https://in-n-out.co.uk",
    image:
      "https://images.pexels.com/photos/1123250/pexels-photo-1123250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      {
        id: 17,
        name: "Fish and Chips",
        price: 15.0,
        description: "Classic British dish with fried fish and chips.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 18,
        name: "Shepherd's Pie",
        price: 18.0,
        description: "Traditional British meat pie with mashed potatoes.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 10,
    name: "Horizon Mediterranean",
    address: "88 Blue Bay Road, Santorini, Grèce",
    cuisine: "Méditerranéenne",
    rating: 4.8,
    phone: "+30 21 9876 5432",
    website: "https://horizonmediterranean.gr",
    image:
      "https://images.pexels.com/photos/3649208/pexels-photo-3649208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dishes: [
      {
        id: 19,
        name: "Moussaka",
        price: 20.0,
        description:
          "Traditional Greek dish with layers of eggplant, meat, and béchamel sauce.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 20,
        name: "Greek Salad",
        price: 10.0,
        description:
          "Fresh salad with tomatoes, cucumbers, olives, and feta cheese.",
        image:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
];

export default restaurants;
