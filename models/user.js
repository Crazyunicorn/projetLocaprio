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
  picture : String,
  role:  {
   type: String,
   enum: ["Locataire", "Proprietaire", "Admin"],
 }

},
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at"
  }
});

userSchema.virtual("isLocataire").get(function(){  //créé des schemas virtuels pour les rôles dans l'app
  return this.role === "Locataire";
})

userSchema.virtual("isProprietaire").get(function(){
  return this.role === "Proprietaire";
})

/*userSchema.virtual("isAdmin").get(function(){
  return this.role === "Admin";
})*/

const users = mongoose.model('User', userSchema);
module.exports = users;
