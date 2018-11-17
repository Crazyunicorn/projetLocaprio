const mongoose = require('mongoose');
const Annonce = require('../models/accomodation.js');
const User = require('../models/user.js');

const dbtitle = 'locaprio';
mongoose.connect(`mongodb://localhost/${dbtitle}`)
.then(()=>{
// User.collection.drop();


const annonce = [
  {
    picture : 'https://www.google.fr/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj78qT-4tveAhUNKBoKHc15CLgQjRx6BAgBEAU&url=http%3A%2F%2Fwww.lescriquets.com%2F284-appart-hotel-le-126%2F426-location-d-appartement-t1-34-m2-br-3-personnes.html&psig=AOvVaw0tgMVHrSUoSEGC7ppV50nP&ust=1542555985587175',
    picture_pro : '',
    surface : 24,
    prix : 700,
    availability : 02/12/2018,
    description : "Studio meublé refait à neuf par architecte avec beaux matériaux : cuisine équipée (réfrigérateur, plaques électriques, lave-linge), canapé lit, rangements intégrés, porte blindée. Au 3e étage sur cour, immeuble calme et sécurisé par digicode dans la rue puis interphone dans la cour.",
    title : "Location meublée studio 24 m² Paris 18E",
    adresse : {
      street : "Rue Mercadet",
      number : 3,
      zip_code : 75018,
      city : "Paris",
    }
  },

  {
    picture : '',
    picture_pro : '',
    surface : 63,
    prix : 2.600,
    availability : 19/01/2019,
    description : "Dans résidence moderne haut standing et sécurisé, gardien, 2 digicodes. Au 4e étage avec ascenseur. Grand 2 pièces meublé, 63 m², sur rue, exposé plein sud.",
    title : "Location meublée appartement 2 pièces 63 m² Paris 8E",
    adresse : {
      street : "Avenue George V",
      number : 90,
      zip_code : 75008,
      city : "Paris",
    }
  },

  {
    picture : '',
    picture_pro : '',
    surface : 57,
    prix : 1.400,
    availability : 09/12/2018,
    description : "Appartement T2. Meublé dans immeuble haussmannien, 57 m². Double vitrage. Vue sur jardin côté chambre, cuisine et salle de bains et vue sur rue côté salon. Très beau quartier central.",
    title : "Location meublée appartement 2 pièces 57 m² Paris 9E",
    adresse : {
      street : "Rue Fontaine",
      number : 22,
      zip_code : 75009,
      city : "Paris",
    }
  },

  {
    picture : '',
    picture_pro : '',
    surface : 18,
    prix : 800,
    availability : 09/02/2019,
    description : "Joli studio de caractère entièrement refait à neuf dans le quartier entre Opéra et Palais Royal. Parquet et poutres apparentes. 15m2 loi Carrez 30m2 de surface au sol. Immeuble ancien très bien entretenu. Coin cuisine séparé. Petite salle d'eau.",
    title : "Location meublée studio 18 m² Paris 1E",
    adresse : {
      street : "Rue de Valois",
      number : 39,
      zip_code : 75001,
      city : "Paris",
    }
  },

  {
    picture : '',
    picture_pro : '',
    surface : 70,
    prix : 1.900,
    availability : 03/01/2019,
    description : "3 pièces meublé, 70 m² grand standing (refait à neuf), immeuble pierre de taille, exposition Sud/Ouest, très lumineux, aucun vis à vis, au 3ème étage avec ascenseur.",
    title : "Location meublée appartement 3 pièces 70 m² Paris",
    adresse : {
      street : "Rue de Peroque",
      number : 89,
      zip_code : 75011,
      city : "Paris",
    }
  },

  {
    picture : '',
    picture_pro : '',
    surface : 25,
    prix : 1.150,
    availability : 28/01/2019,
    description : "Dernier étage d'un immeuble ancien ravalé et sécurisé. Entrée avec fenêtre et étagères, salon, cuisine tout équipée avec fenêtre, induction, micro-ondes et lave-linge, coin repas.",
    title : "Location appartement 2 pièces 25 m² Paris 3E",
    adresse : {
      street : "Rue Rambuteau",
      number : 65,
      zip_code : 75003,
      city : "Paris",
    }
  },
]
User.findOne()
.then(user => {
  const createAnnonce = annonce.map(annonce => {
    annonce.user = user._id
    const newAnnonce = new Annonce(annonce);
    return newAnnonce.save()
     .then(author => {
       return author;
     })
    .catch(error => {
       throw new Error(`Impossible to add the user. ${error}`)
     })
   
   });
  
})

  })

  