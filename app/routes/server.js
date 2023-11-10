const express = require("express");
const cors = require("cors");
const db=require("../models/index.js");
const app = express();
const planteRoutes = require('./plant.route');
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const {signinHandler,welcomeHandler,refreshHandler}=require('./handlers')


var corsOptions = {
    origin: "http://localhost:3000"
};

const PORT = process.env.PORT || 8080;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connexion with database
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

//page d'acceuil
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to plantes application"
    });
});
app.use(bodyParser.json());
app.use(cookieParser())

app.post('/signin',signinHandler)
app.get('/welcome',welcomeHandler)

// Include the routes and assign it to a variable
const tutorialRoutes = require("./tutorials.routes.js");

// Initialize the routes by passing the 'app' to the exported function in 'tutorials.routes'
tutorialRoutes(app);


app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
