const API_BASE_URL = "http://localhost:4000/api";

// ✅ Appelle l'API correcte pour récupérer les plats d'un restaurant
export const getDishesByRestaurant = async (restaurantId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/${restaurantId}/dishes`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des plats");
    }
    return await response.json();
  } catch (error) {
    console.error("Service Error:", error);
    return [];
  }
};