import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";

export const getDishes = async (restaurantId: number): Promise<DishDTO[]> => {
  try {
    const response = await axios.get<DishDTO[]>(
      `${API_BASE_URL}/restaurants/${restaurantId}/dishes`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors du chargement des plats:", error);
    throw error;
  }
};

export const getDishById = async (
  restaurantId: number,
  dishId: number
): Promise<DishDTO> => {
  try {
    const response = await axios.get<DishDTO>(
      `${API_BASE_URL}/restaurants/${restaurantId}/dishes/${dishId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors du chargement d'un plat:", error);
    throw error;
  }
};

export const createDish = async (
  restaurantId: number,
  restaurant: CreateDishDTO
): Promise<DishDTO> => {
  try {
    const response = await axios.post<DishDTO>(
      `${API_BASE_URL}/restaurants/${restaurantId}/dishes`,
      restaurant
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création d'un plat:", error);
    throw error;
  }
};

export const deleteDish = async (
  restaurantId: number,
  dishId: number
): Promise<void> => {
  try {
    await axios.delete(
      `${API_BASE_URL}/restaurants/${restaurantId}/dishes/${dishId}`
    );
  } catch (error) {
    console.error("Erreur lors de la suppression d'un plat:", error);
    throw error;
  }
};
