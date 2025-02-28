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

export const createRestaurant = async (
  restaurant: CreateOrUpdateRestaurantDTO
): Promise<RestaurantDTO> => {
  try {
    const response = await axios.post<RestaurantDTO>(
      `${API_BASE_URL}/restaurants`,
      restaurant
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création d'un restaurant:", error);
    throw error;
  }
};

export const updateRestaurant = async (
  id: number,
  restaurant: CreateOrUpdateRestaurantDTO
): Promise<RestaurantDTO> => {
  try {
    const response = await axios.put<RestaurantDTO>(
      `${API_BASE_URL}/restaurants/${id}`,
      restaurant
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour d'un restaurant:", error);
    throw error;
  }
};

export const deleteRestaurant = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/restaurants/${id}`);
  } catch (error) {
    console.error("Erreur lors de la suppression d'un restaurant:", error);
    throw error;
  }
};
