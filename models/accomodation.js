//modèle nécéssaire pour le log in avec passpaort
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt"); //à verifié
const bcryptSalt = 10;


const appartSchema = new Schema ({
  patron_id: //why?
  picture : String,
  picture_pro : String,
  surface : Number,
  availability : Date,
  size : Number,
  description : String,
  adresse : {
    street : String,
    number : Number,
    zip_code : Number,
    city : String,
  }
});

const appart = mongoose.model('Appart', appartSchema);
module.exports = appartSchema;
