const orders = []; // Stockage en mémoire

exports.createOrder = (req, res) => {
    const cart = req.body; // Récupère le panier

    if (!cart || cart.length === 0) {
        return res.status(400).json({ message: "Le panier est vide." });
    }

    // Création commande avec ID unique et date
    const newOrder = {
        id: orders.length + 1,
        items: cart,
        date: new Date().toISOString(),
    };

    orders.push(newOrder);

    return res.status(201).json(newOrder);
};

exports.getOrders = (req, res) => {
    res.json(orders);
};
