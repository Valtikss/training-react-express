import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";

export const getRestaurants = async (): Promise<RestaurantDTO[]> => {
  try {
    const response = await axios.get<RestaurantDTO[]>(
      `${API_BASE_URL}/restaurants`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors du chargement des restaurants:", error);
    throw error;
  }
};

export const getRestaurantById = async (id: number): Promise<RestaurantDTO> => {
  try {
    const response = await axios.get<RestaurantDTO>(
      `${API_BASE_URL}/restaurants/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors du chargement d'un restaurant:", error);
    throw error;
  }
};
