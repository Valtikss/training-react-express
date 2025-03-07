import { createOrder } from "../api/ordersApi";

export const addOrder = async (cart) => {
    if (!cart || cart.length === 0) {
        throw new Error("Le panier est vide.");
    }

    try {
        const result = await createOrder(cart);
        return result;
    } catch (error) {
        console.error("Erreur lors du traitement de la commande :", error);
        throw error;
    }
};


