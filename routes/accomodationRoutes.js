const express = require("express");
const passport = require("passport");
const api = express.Router();
const User = require("../models/user");
const myAppart = require("../models/accomodation");
const bcrypt = require("bcrypt");

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
