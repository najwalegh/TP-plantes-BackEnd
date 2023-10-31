

const Plante = require('../models/tutoriel.model');

exports.findAll = (req, res) => {
    const title = req.query.title;

    Plante.getAll(title)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la récupération des plantes."
            });
        });
};

