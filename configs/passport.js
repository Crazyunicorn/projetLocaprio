const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user"); // va chercher le modele de données pour pouvoir les enregistrer en bdd

// strategie passport
// serializeUser(): defines what user data to save in the session
// (happens when you log in successfully)
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});
// deserializeUser(): defines how to retrieve the user information from the DB
// (happens automatically on EVERY request AFTER you log in)
passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

// app.use(flash()); // pour les messages avec handlebar, inutile en js
passport.use(
  new LocalStrategy((email, password, next) => {
    passReqToCallback: true;
    User.findOne({ email }, (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next({
          status: 400,
          message: "invalid email"
        });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return next({
          status: 400,
          message: "invalid password"
        });
      }
      //app.locals.user = user; // yolo ???
      //app.locals.isLocataire = user.role === "Locataire";
      return next(null, user);
    });
  })
);

// alex passport session
function passportSetup(app) {
  app.use(passport.initialize());
  app.use(passport.session());
}

module.exports = passportSetup;
