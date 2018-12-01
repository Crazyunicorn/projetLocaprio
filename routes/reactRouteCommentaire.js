const express = require("express");
const passport = require("passport");
const api = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
//--------- test postman --------- //
api.get("/login", function(req, res) {
  res.json({ message: "hello from the login route" });
});
//--------- Log In --------- //

//passport setup
api.post(
  "/login",
  // passport.authenticate("local"),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json({ message: "ok" });
  }
);
//
//
//
// lucas setup
api.post("/login2", (req, res, next) => {
  const { email } = req.body;
  const originalPassword = req.body.password;
  console.log(email, originalPassword);

  // first check to see if there's a document with that email
  User.findOne({ email: { $eq: email } })
    .then(userDoc => {
      // "userDoc" will be empty if the email is wrong (no document in database)
      if (!userDoc) {
        // create an error object to send to our error handler with "next()"
        next(new Error("Incorrect email. 🤦‍♂️"));
        return;
      }

      // second check the password
      const { password } = userDoc;
      // "compareSync()" will return false if the "originalPassword" is wrong
      if (!bcrypt.compareSync(originalPassword, password)) {
        // create an error object to send to our error handler with "next()"
        next(new Error("Password is wrong. ️🤯"));
        return;
      }

      // LOG IN THIS USER
      // "req.logIn()" is a Passport method that calls "serializeUser()"
      // (that saves the USER ID in the session)
      req.logIn(userDoc, () => {
        // hide "encryptedPassword" before sending the JSON (it's a security risk)
        userDoc.password = undefined;
        res.json({ userDoc });
      });
    })
    .catch(err => next(err));
});

//--------- Log out --------- //

//passport Setup
api.get("/logout", function(req, res) {
  req.logout();
});

//
//
//
//
//lucas setup
api.delete("/logout2", (req, res, next) => {
  // "req.logOut()" is a Passport method that removes the user ID from session
  req.logOut();

  res.json({ userDoc: null });
});

api.get("/checklogin", (req, res, next) => {
  if (req.user) {
    // hide "encryptedPassword" before sending the JSON (it's a security risk)
    req.user.password = undefined;
    res.json({ userDoc: req.user });
  } else {
    res.json({ userDoc: null });
  }
});

router.post("/creannonce", (req, res, next) => {
  console.log(req.body);
  const {
    surface,
    prix,
    availability,
    description,
    number,
    street,
    zip_code,
    city,
    title
  } = req.body; // ne pas oublier les paramères 'name="firstName"' dans les input des forms pour le req.body.

  const newAnnonce = new myAppart({
    surface: surface,
    availability: new Date(availability),
    prix,
    description,
    title,
    user: req.user._id,
    adresse: {
      number: number,
      street: street,
      zip_code: zip_code,
      city: city
    }
  }); // cour mongoose express create - update document + penser aux id dans les forms
  if (
    surface === "" ||
    availability === "" ||
    description === "" ||
    number === "" ||
    street === "" ||
    zip_code === "" ||
    city === "" ||
    title === ""
  ) {
    res.render("creannonce", {
      message: "Remplissez toutes les informations pour créer votre annonce"
    });
    return;
  }

  newAnnonce.save(err => {
    if (err) {
      console.log("err save", err);
      res.render("creannonce", { message: "big problem" });
      return;
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
};




module.exports = api;
