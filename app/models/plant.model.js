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
module.exports = Plant;


// module.exports=mongoose =>{
//     const schema=mongoose.model("user",mongoose.Schema(
//         {
//             name:STRING,
//             email:String,
//             address:STRING
//         },
//         {timestamps:true}
//     ));
//     schema.method("toJSON",function(){
//         const{__v,_id,...object}=this.toObject();
//         object.id = _id;
//         return object;
//     });
//     const user=mongoose.model("user",schema);
//     return user;
// };
