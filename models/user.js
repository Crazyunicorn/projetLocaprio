//modèle nécéssaire pour le log in avec passpaort
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt"); //à verifié
const bcryptSalt = 10;


const userSchema = new Schema({
  firstName : String,
  lastName: String,
  email : String,
  password : String,
  role : String},
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at"
  }
});

const users = mongoose.model('User', userSchema);
module.exports = users;
