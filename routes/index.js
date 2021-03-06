const express = require("express");
const authRouter = express.Router();
const myUser = require("../models/user"); // va chercher le modele de données pour pouvoir les enregistrer en bdd
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const myAppart = require("../models/accomodation");

/* GET home page */
authRouter.get("/", (req, res, next) => {
  res.render("index");
});

authRouter.get("/creacompte", (req, res, next) => {
  res.render("creacompte");
});

authRouter.get("/connexion", (req, res, next) => {
  res.render("connexion", { message: req.flash("error") });
});

//page Appartements
authRouter.get("/categorie", (req, res, next) => {
  myAppart
    .find()
    .populate("user") //méthode pour populer la donnée d'un user qui possède l'appartement au travers du modèle de bdd.
    .then(apparts => {
      console.log("app", apparts);
      res.render("categorie", { message: req.flash("error"), apparts });
    });
});

//crea route pour envoyer le contenu de la page Catégorie du server sur la page Annonces de react
authRouter.get("/api/apparts", (req, res, next) => {
  myAppart
    .find()
    .populate("user") //méthode pour populer la donnée d'un user qui possède l'appartement au travers du modèle de bdd.
    .then(apparts => {
      console.log("app", apparts);
      res.json({ apparts });
    });
});

//création page description appart
authRouter.get("/description/:id", (req, res, next) => {
  myAppart
    .findById(req.params.id)
    .populate("user")
    .then(apparts => {
      res.render("description", { apparts: apparts });
      console.log(apparts);
    })
    .catch(error => {
      console.log(error);
    });
});

//crea route pour envoyer le contenu de la page description appart du server sur la page description annonce de react
authRouter.get("/api/description/:id", (req, res, next) => {
  myAppart
    .findById(req.params.id)
    .populate("user") //méthode pour populer la donnée d'un user qui possède l'appartement au travers du modèle de bdd.
    .then(appart => {
      res.json({ appart: appart });
      console.log(appart);
    })
    .catch(error => {
      console.log(error);
    });
});

// création d'un user en bdd
authRouter.post("/creacompte", (req, res, next) => {
  console.log(req.body);
  const { firstName, lastName, email, password, role } = req.body; // ne pas oublier les paramères 'name="firstName"' dans les input des forms pour le req.body.
  const newUser = new myUser({ firstName, lastName, email, password, role }); // cour mongoose express create - update document + penser aux id dans les forms

  if (firstName === "" || lastName === "" || email === "" || password === "") {
    res.render("creacompte", {
      message: "Remplissez toutes les informations pour créer votre profil"
    });
    return;
  }

  myUser.findOne({ email }, "email", (err, user) => {
    console.log("log 2"+req.body);
    if (user !== null) {
      res.render("creacompte", {
        message: "Cette adresse email existe déjà !!!"
      });
      return;
    }
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    const newUser = new myUser({
      email,
      firstName,
      lastName,
      role,
      password: hashPass
    });
    newUser.save(err => {
      console.log("log 3"+req.body);
      if (err) {
        res.render("creacompte", { message: "big problem" });
      } else if (this.role === "Locataire") {
        res.redirect("profiloc");
      } else {
        res.redirect("profilpro");
      }
      /*  else {
        res.redirect("admin")
      }*/
    });
  });
});

//crea route pour envoyer le contenu de la crea compte du server sur la page profil de react
authRouter.get("/api/creacompte", (req, res, next) => {
  res.json(req.user);
  // myUser
  //   .find()
  //   .then(myUser => {
  //     res.json({ myUser });
  //     console.log(myUser);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
});

/*
authRouter.get('/editProfil', (req, res, next) => {
  myUser.findOne({_id: req.query.user._id})
  .then((user) => {
    res.render("editProfil", { user})
  })
  .catch((error) => {
    console.log(error)
  })
});
*/

module.exports = authRouter;

/*module.exports = router;

router.get('/categorie', (req, res, next) => {
res.render('categorie');
});

/*
router.get('/categorie/location', (req, res, next) => {
res.render('categorie/locatio');
});
*/
