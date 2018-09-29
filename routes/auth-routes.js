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

//page profil uniquement accessible pour un user ayant crée son compte.
authRouter.get('/profil', ensureLogin.ensureLoggedIn(),(req, res, next) => {
  res.render('profil');
});


//page Catégorie.
authRouter.get('/categorie', ensureLogin.ensureLoggedIn(), (req, res, next) => {
res.render('categorie');
});

module.exports=authRouter;
