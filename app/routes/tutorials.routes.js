module.exports=app =>{
    const tutorials = require("../controllers/tutorial.controller.js");

    var router=require("express").Router();

    //Retrieve all tutorials
    router.get("/",tutorials.findAll);

    app.use('/api/tutorials',router);
};

