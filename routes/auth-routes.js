const express = require('express');
const router  = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const User = require('../models/user') // va chercher le modele de données pour pouvoir les enregistrer en bdd
const myAppart = require('../models/accomodation')


let authRouter = function (app) {
  router.post("/connexion", passport.authenticate("local", {
    successRedirect: "/categorie",
    failureRedirect: "/connexion",
    failureFlash: true,
    passReqToCallback: true
  }));

  //go get datas for profile proprio
router.get("/profilpro/:id", (req, res, next) => {
User.findById(req.params.id)
.then(proprio=>{
  console.log(proprio)
  res.render("/profilpro", {'user': user})
})
.catch(error=>{
  console.log(error)
})
  });

  //go get datas for profile loc
    router.get("/profiloc/:id", (req, res, next) => {
      User.findById(req.params.id)
      .then(locataire=>{
        console.log(locataire)
        res.render("/profiloc", {'user': user})
      })
      .catch(error=>{
        console.log(error)
      })
        });



  //page profil locataire uniquement accessible pour un user ayant crée son compte.
  router.get('/profiloc', ensureLogin.ensureLoggedIn("/connexion"),(req, res, next) => {
    res.render('profiloc');
  });

  //page profil propriétaire uniquement accessible pour un user ayant crée son compte.
  router.get('/profilpro', ensureLogin.ensureLoggedIn("/connexion"),(req, res, next) => {
    res.render('profilpro');
  });

  router.get('/admin', ensureLogin.ensureLoggedIn("/connexion"),(req, res, next) => {
    res.render('admin');
  });

    //page cre annonce uniquement accessible pour un proprio ayant crée son compte.
  router.get('/creannonce', ensureLogin.ensureLoggedIn("/connexion"),(req, res, next) => {
    res.render('creannonce');
  });
  //création d'une annonce en bdd
  router.post('/creannonce', (req, res, next) => {
    console.log(req.body);
    const { surface, prix, availability, description, number, street, zip_code, city, title } = req.body; // ne pas oublier les paramères 'name="firstName"' dans les input des forms pour le req.body.

    const newAnnonce = new myAppart({
      'surface' : surface,
      availability: new Date(availability),
      prix,
      description,
      title,
      user: req.user._id,
      adresse: {
        'number': number,
        'street' : street,
        'zip_code' : zip_code,
        'city' : city
      }
    }) // cour mongoose express create - update document + penser aux id dans les forms
    if (surface === "" || availability==="" || description==="" || number === "" || street === "" || zip_code === "" || city === ""|| title==="") {
      res.render("creannonce", { message: "Remplissez toutes les informations pour créer votre annonce" });
      return;
    };

    newAnnonce.save((err) =>{

      if (err) {
        console.log("err save", err)
        res.render("creannonce", {message: "big problem"});
        return
      }
      res.redirect("categorie");
    });
  });

  // deconnexion
  router.get("/logout", (req, res) => {
    app.locals.user = false;
    app.locals.isLocataire = false;
    req.logout();
    res.redirect("/");
  });
  return router;
}


module.exports=authRouter;
