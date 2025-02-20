const restaurants = [
  {
    id: 1,
    name: "Le Sultan Kebab",
    address: "34 Rue de Belleville, 75020 Paris, France",
    cuisine: "Turque",
    rating: 4.8,
    phone: "+33 1 45 67 89 12",
    website: "https://lesultankebab.fr",
    image: "https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Istanbul Grill",
    address: "18 Friedrichstraße, 10117 Berlin, Allemagne",
    cuisine: "Turque",
    rating: 4.6,
    phone: "+49 30 1234567",
    website: "https://istanbulgrill.de",
    image: "https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Ali Baba Kebab",
    address: "56 Via Torino, 00184 Rome, Italie",
    cuisine: "Méditerranéenne",
    rating: 4.7,
    phone: "+39 06 2345 6789",
    website: "https://alibabakebab.it",
    image: "https://images.pexels.com/photos/8112396/pexels-photo-8112396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// Ajout de 97 restaurants supplémentaires
for (let i = 4; i <= 100; i++) {
  restaurants.push({
    id: i,
    name: ["Bagdadi", "Kebab", "Palace", "Speed", "Star"][Math.floor(Math.random() * 5)] + " " + ["Express", "Grill", "King", "Royal", "Shop","Kebab","Durum"][Math.floor(Math.random() * 7)],
    address: `${Math.floor(Math.random() * 100)} Avenue des Grillades, 750${Math.floor(Math.random() * 20)} Paris, France`,
    cuisine: ["Turque", "Méditerranéenne", "Moyen-Orientale", "Indienne"][Math.floor(Math.random() * 4)],
    rating: (Math.random() * 1.5 + 3.5).toFixed(1),
    phone: `+33 ${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 9000) + 1000}`,
    website: `https://kebabexpress${i}.fr`,
    image: [
      "https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8112396/pexels-photo-8112396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5779370/pexels-photo-5779370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5779816/pexels-photo-5779816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ][Math.floor(Math.random() * 6)],
  });
}

module.exports = restaurants;
