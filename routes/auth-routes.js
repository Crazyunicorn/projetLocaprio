const express = require('express');
const router  = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const User = require('../models/user') // va chercher le modele de données pour pouvoir les enregistrer en bdd



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
