const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId }, 
    name : String
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
   