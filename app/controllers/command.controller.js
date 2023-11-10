const Commande = require('../models/command.model');

exports.createCommande = async (req, res) => {
    const { userId, plantes, total } = req.body;
    try {
        const nouvelleCommande = await Commande.create({ user: userId, plantes: plantes,totalPrice: total });
        res.json(nouvelleCommande);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};