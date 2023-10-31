const sql=require("./db.js");

const Plante= function (plante){
    this.name=plante.name;
    this.category=plante.category;
    this.price= plante.price;
    this.id=plante.id;
    this.light=plante.light;
    this.water=plante.water;
};


Plante.getAll=(title) =>{
    let query =" SELECT * FROM plantes";
    return new Promise((resolve, reject) => {
    if(title){
        query +=` WHERE name LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            reject(err);
            return;
        }
        console.log("Plantes: ", res);
        resolve(res);
    });
   });
};

module.exports=Plante