const express = require("express");
const passport = require("passport");
const api = express.Router();
const User = require("../models/user");
const myAppart = require("../models/accomodation");
const bcrypt = require("bcrypt");

// api.post("/user", (req, res, next) => {
//   //console.log(req.body);
//   const { firstName, lastName, email, password, role } = req.body; // ne pas oublier les paramères 'name="firstName"' dans les input des forms pour le req.body.
//   const newUser = new myUser({ firstName, lastName, email, password, role }); // cour mongoose express create - update document + penser aux id dans les forms
//
//   if (firstName === "" || lastName === "" || email === "" || password === "") {
//     res.render("user", {});
//     return;
//   }
//
//   myUser.findOne({ email }, "email", (err, user) => {
//     if (user !== null) {
//       res.render("user", {});
//       return;
//     }
//     const salt = bcrypt.genSaltSync(bcryptSalt);
//     const hashPass = bcrypt.hashSync(password, salt);
//     const newUser = new myUser({
//       email,
//       firstName,
//       lastName,
//       role,
//       password: hashPass
//     });
//     newUser.save(err => {
//       if (err) {
//         res.render("user", { message: "big problem" });
//       } else {
//         res.redirect("profilpro");
//       }
//       /*  else {
//         res.redirect("admin")
//       }*/
//     });
//   });
// });

// ----- Creation annonce -----

api.post("/annonce", (req, res, next) => {
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
  } = req.body;

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
  });
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

module.exports = api;
