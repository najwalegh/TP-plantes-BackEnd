const Plant = require('../models/plant.model');

// Récupérer toutes les plantes
exports.getAllPlantes = async (req, res) => {
    try {
        const allPlants = await Plant.find(); // Récupérer toutes les plantes depuis la base de données
        res.status(200).json(allPlants); // Envoyer les plantes en tant que réponse JSON
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

