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

export const getRestaurantById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/${id}`);
    if (!response.ok) throw new Error("Erreur lors du chargement du restaurant");

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const createRestaurant = async (restaurantData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(restaurantData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erreur lors de l'ajout du restaurant");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const updateRestaurant = async (id, restaurantData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(restaurantData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erreur lors de la mise à jour");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const deleteRestaurant = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la suppression");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

