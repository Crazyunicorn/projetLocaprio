const express = require("express");
const passport = require("passport");
const api = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//--------- creation compte --------- //

api.post("/user", (req, res, next) => {
  let { firstName, lastName, email, password, role } = req.body;
  password = bcrypt.hashSync(password, 10);
  User.create({ firstName, lastName, email, password, role })
    .then(userDoc => {
      // LOG IN THIS USER
      // "req.logIn()" is a Passport method that calls "serializeUser()"
      // (that saves the USER ID in the session)
      req.logIn(userDoc, () => {
        // hide "encryptedPassword" before sending the JSON (it's a security risk)
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      });
    })
    .catch(err => next(err));
});

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

//lucas setup
api.delete("/logout", (req, res, next) => {
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

module.exports = api;
