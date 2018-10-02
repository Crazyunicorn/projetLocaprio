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
  picture : String
  role : String},
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at"
  }
});

const appart = new Schema ({
  patron_id:
  picture : String;
  surface : Number;
  avaibility : Date;
  size : Number;
  description : String;
  adresse : {
    street : String;
    number : Number;
    zip_code : Number;
    city : String;
  }
});

const users = mongoose.model('User', userSchema);
module.exports = users;
