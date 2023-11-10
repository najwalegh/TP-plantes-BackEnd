const User = require('../models/user.model');

// Exemple de fonction pour récupérer un utilisateur par ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

    // Contrôleur pour créer un nouvel utilisateur
exports.createUser= async (req, res) => {
    const { username, email,address } = req.body;

    const nouveauUtilisateur = new User({
        username,
        email,
        // password,
        address
    });

    try {
        const utilisateurEnregistre = await nouveauUtilisateur.save();
        res.status(201).json(utilisateurEnregistre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

