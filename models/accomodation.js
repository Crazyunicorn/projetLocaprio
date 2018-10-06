//modèle nécéssaire pour le log in avec passpaort
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt"); //à verifié
const bcryptSalt = 10;


const appartSchema = new Schema ({
  picture : String,
  picture_pro : String,
  surface : Number,
  prix : Number,
  availability : Date,
  description : String,
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  adresse : {
    street : String,
    number : Number,
    zip_code : Number,
    city : String,
  }
});

const appart = mongoose.model('Appart', appartSchema);
module.exports = appart;
