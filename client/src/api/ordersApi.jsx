import apiClient from "./api";

export const createOrder = async (cart) => {
    try {
        const response = await apiClient.post("/orders", cart);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création de la commande :", error);
        throw error;
    }
};