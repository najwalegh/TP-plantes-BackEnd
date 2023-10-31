const express = require("express");
const cors = require("cors");

const app = express();
var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to plantes application"
    });
});

// Include the routes and assign it to a variable
const tutorialRoutes = require("./tutorials.routes.js");

// Initialize the routes by passing the 'app' to the exported function in 'tutorials.routes'
tutorialRoutes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
