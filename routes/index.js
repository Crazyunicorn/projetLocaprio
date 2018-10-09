const express = require('express');
const authRouter  = express.Router();
const myUser = require('../models/user') // va chercher le modele de données pour pouvoir les enregistrer en bdd
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const myAppart = require('../models/accomodation')

/* GET home page */
authRouter.get('/', (req, res, next) => {
  res.render('index');
});

authRouter.get('/creacompte', (req, res, next) => { // prendre le cours au sujet de passport
  res.render('creacompte');
});

authRouter.get('/connexion', (req, res, next) => {
  res.render('connexion', { "message": req.flash("error") });
});

//page Catégorie.
authRouter.get('/categorie', (req, res, next) => {
  myAppart.find()
  .populate('user') //méthode pour populer la donnée d'un user qui possède l'appartement au travers du modèle de bdd.
  .then(apparts => {
    console.log('app', apparts)
    res.render('categorie', { "message": req.flash("error") , apparts});
  })
});

//création page description appart
authRouter.get('/description/:id', (req, res, next) => {

  myUser.findById(req.params.id)
  .then(apparts=>{
    res.render('description', {'apparts': apparts})
  })
  .catch(error=>{
    console.log(error)
  })



});






// création d'un user en bdd
authRouter.post('/creacompte', (req, res, next) => {
  console.log(req.body);
  const { firstName, lastName, email, password, role } = req.body; // ne pas oublier les paramères 'name="firstName"' dans les input des forms pour le req.body.
  const newUser = new myUser({firstName, lastName, email, password, role}) // cour mongoose express create - update document + penser aux id dans les forms

  if (firstName === "" || lastName==="" || email==="" || password === "") {
    res.render("creacompte", { message: "Remplissez toutes les informations pour créer votre profil" });
    return;
  }

  myUser.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.render("creacompte", { message: "Cette adresse email existe déjà !!!" });
      return;
    }
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    const newUser = new myUser({
      email, firstName, lastName, role,
      password: hashPass
    });
    newUser.save((err) =>{
      if (err) {
        res.render("creacompte", {message: "big problem"});
      }
      else if (this.role === "Locataire"){
        res.redirect("profiloc");
      }
      else  {
        res.redirect("profilpro");
      }
    /*  else {
        res.redirect("admin")
      }*/
    });
  });
});


module.exports=authRouter;

/*module.exports = router;

router.get('/categorie', (req, res, next) => {
res.render('categorie');
});

/*
router.get('/categorie/location', (req, res, next) => {
res.render('categorie/locatio');
});
*/
