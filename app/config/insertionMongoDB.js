const res = require('express/lib/response');
const mongoose = require('mongoose');

// Schéma pour les données de plante
const plantSchema = new mongoose.Schema({
  name: String,
  category: String,
  id: String,
  light: Number,
  water: Number,
  cover: String,
  price: Number
});

// Modèle de plante
const Plant = mongoose.model('Plant', plantSchema);

// Connexion à MongoDB avec Mongoose
mongoose.connect('mongodb://localhost:27017/plante', { useNewUrlParser: true, useUnifiedTopology: true });

// Données à insérer
const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: 'monstera',
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: 'lyrata',
		price: 16
	},

	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: 'pothos',

		price: 9
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: 'calathea',

		price: 20
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: 'olivier',
		price: 25
	},

	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: 'cactus',
		price: 6
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: 'basil',
		price: 5
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: 'succulent',
		price: 8
	},

	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: 'mint',
		price: 4
	}
];

// Insérer les données dans la base de données
// Plant.insertMany(plantList)
//   .then(() => {
//     console.log('Données insérées avec succès');
//     mongoose.connection.close(); // Ferme la connexion après l'insertion
//   })
//   .catch((err) => console.error('Erreur lors de l\'insertion :', err));

Plant.find()
        .then(plants => {
            // res.json(plants);
            console.log(plants);
        })
        .catch(err => {
            res.status(500).json({ message: err.message || "Une erreur s'est produite lors de la récupération des plantes." });
        });
