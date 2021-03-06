const express = require("express");
const passport = require("passport");
const api = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//--------- Log In --------- //

api.post("/login", (req, res, next) => {
  const { email } = req.body;
  const originalPassword = req.body.password;
  console.log(email, originalPassword);

  User.findOne({ email: { $eq: email } })
    .then(userDoc => {
      if (!userDoc) {
        next(new Error("Incorrect email. 🤦‍♂️"));
        return;
      }

      const { password } = userDoc;
      if (!bcrypt.compareSync(originalPassword, password)) {
        next(new Error("Password is wrong. ️🤯"));
        return;
      }

      req.logIn(userDoc, () => {
        userDoc.password = undefined;
        res.json({ userDoc });
      });
    })
    .catch(err => next(err));
});

//--------- Log out --------- //

api.get("/logout", function(req, res) {
  req.logout();
});

api.delete("/logout2", (req, res, next) => {
  req.logOut();

  res.json({ userDoc: null });
});

//--------- checklogin --------- //

api.get("/checklogin", (req, res, next) => {
  if (req.user) {
    req.user.password = undefined;
    res.json({ userDoc: req.user });
  } else {
    res.json({ userDoc: null });
  }
});

//--------- Crea annonces--------- //

module.exports = api;
