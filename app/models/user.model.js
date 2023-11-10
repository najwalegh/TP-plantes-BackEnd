const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    address:String
});

userSchema.method("toJSON",function(){
    const{__v,_id,...object}=this.toObject();
    object.id = _id;
    return object;
});

// userSchema.pre('save', async function (next) {
//     const user = this;
//     if (user.isModified('password') || user.isNew) {
//       const hash = await bcrypt.hash(user.password, 10);
//       user.password = hash;
//       return next();
//     }
//     return next();
//   });
  
// userSchema.methods.comparePassword = function (password) {
//     return bcrypt.compare(password, this.password);
//   };
  

const User = mongoose.model('User', userSchema);

module.exports = User;