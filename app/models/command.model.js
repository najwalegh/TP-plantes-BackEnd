const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Référence vers l'utilisateur qui a passé la commande
    date: { type: Date, default: Date.now },
    // items: [
    //     {
    //         plant: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' }, // Référence vers la plante dans la commande
    //         quantity: Number,
    //         price:Number // Prix individuel de la plante
    //     }
    // ],
    totalPrice : Number // Prix total de la commande= Somme des Prix individuels 
});

const Command = mongoose.model('Command', commandeSchema);

module.exports = Command;