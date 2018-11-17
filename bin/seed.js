const mongoose = require('mongoose');
const User = require('../models/user.js');



const dbtitle = 'locaprio';
mongoose.connect(`mongodb://localhost/${dbtitle}`)
.then(()=>{
  console.log("start")
  User.collection.drop();

  const user = [
    {
     firstName : "Baptiste",
     lastName: "Meunier",
     email : "blur.meunier@gmail.com",
     password : "yolo",
     picture : '',
     role:  "Locataire",
    },
 
    {
     firstName : "Rémi",
     lastName: "Lorier",
     email : "r.lorier@gmail.com",
     password : "yolo",
     picture : '',
     role:  "Locataire",
    },
 
    {
     firstName : "Sarah",
     lastName: "Girard",
     email : "s.girard@gmail.com",
     password : "yolo",
     picture : '',
     role:  "Locataire",
    },
 
    {
     firstName : "Julia",
     lastName: "Sorel",
     email : "j.sorel@gmail.com",
     password : "yolo",
     picture : '',
     role:  "Proprietaire",
    },
 
    {
     firstName : "Charles",
     lastName: "Lousson",
     email : "c.lousson@gmail.com",
     password : "yolo",
     picture : '',
     role:  "Proprietaire",
    },
 
    {
     firstName : "Manon",
     lastName: "Gilain",
     email : "m.gilain@gmail.com",
     password : "yolo",
     picture : '',
     role:  "Proprietaire",
    },
  
  ]
 
 const createUser = user.map(user => {
  const newUser = new User(user);
  return newUser.save()
   .then(author => {
     console.log('ok')
     return author;
   })
  .catch(error => {
     throw new Error(`Impossible to add the user. ${error}`)
   })
 
 });
 
 
 
})
