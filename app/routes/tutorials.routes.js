module.exports=app =>{
    const tutorials = require("../controllers/plant.controller");
    const user=require("../controllers/user.controller");
    const command=require("../controllers/command.controller")

    var router=require("express").Router();

    //Retrieve all tutorials
    router.get("/",tutorials.getAllPlantes);

    //Create User
    router.post("/users",user.createUser);

    //Create Command
    router.post("/command",command.createCommande);

    app.use('/api/tutorials',router);
};

