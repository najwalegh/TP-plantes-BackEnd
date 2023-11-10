const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./user.route');
const planteRoutes = require('./plant.route');
const commandeRoutes = require('./command.route');
const authRoutes = require('./auth.routes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cors = require("cors");

const app = express();
var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db=require("../models/index.js");

db.mongoose
.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("connected to the database !")
}).catch((err) => {
    console.log("can not connect to the database !")
    process.exit();
});

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to plantes application"
    });
});


app.use(express.json());
app.use('/auth', authRoutes);



app.use('/users', userRoutes);
app.use('/plantes', planteRoutes);
app.use('/commandes', commandeRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
