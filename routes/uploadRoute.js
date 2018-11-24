const express = require("express");
const router = express.Router();
const fileUploader = require("../configs/fileupload");

router.get("/upload", (req, res, next) => {
  res.send("hello there");
});

router.post(
  "/image",
  fileUploader.single("file"), //méthode single appelé, spécifie le type de fiche, c'est l aconfig de multer (middleware) NOMMER de la même manière en front 'file'
  (req, res, next) => {
    // multer puts all the information about the uploaded file in "req.file"
    console.log("New FILE UPLOAD", req.file, req.filess);
    if (!req.file) {
      next(new Error("No image uploaded! 🤦‍♀️")); //à remettre une fois le front terminé.
      console.log("No image uploaded! 🤦‍♀️");
    } else {
      console.log(req.file);
      const { originalname, secure_url, format, width, height } = req.file; // param de file ajouté ajouté par multer
      res.json({
        imageName: originalname,
        imageUrl: secure_url,
        format,
        width,
        height
      });
    }
  }
);

module.exports = router;
