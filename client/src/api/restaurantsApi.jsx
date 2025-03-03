const API_BASE_URL = "http://localhost:4000/api";

export const getRestaurants = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des restaurants");
    }
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
