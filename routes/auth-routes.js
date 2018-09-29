const express = require('express');
const authRouter  = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const User = require('../models/user') // va chercher le modele de données pour pouvoir les enregistrer en bdd


authRouter.get('/connexion', (req, res, next) => {
  res.render('connexion');
});

authRouter.post("/connexion", passport.authenticate("local", {
  successRedirect: "/categorie",
  failureRedirect: "/connexion",
  failureFlash: true,
  passReqToCallback: true
}));

authRouter.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("private", { user: req.user });
  console.log("hello", req.user);
});



module.exports=authRouter;
