const express = require('express');
const authRouter  = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const User = require('../models/user') // va chercher le modele de données pour pouvoir les enregistrer en bdd




authRouter.post("/connexion", passport.authenticate("local", {
  successRedirect: "/categorie",
  failureRedirect: "/connexion",
  failureFlash: true,
  passReqToCallback: true
}));

//page profil locataire uniquement accessible pour un user ayant crée son compte.
authRouter.get('/profiloc', ensureLogin.ensureLoggedIn(),(req, res, next) => {
  res.render('profiloc');
});

//page profil propriétaire uniquement accessible pour un user ayant crée son compte.
authRouter.get('/profilpro', ensureLogin.ensureLoggedIn(),(req, res, next) => {
  res.render('profilpro');
});



//page Catégorie.
authRouter.get('/categorie', ensureLogin.ensureLoggedIn(), (req, res, next) => {
res.render('categorie');
});

module.exports=authRouter;
