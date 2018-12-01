require("dotenv").config();
require("./configs/fileupload");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");
const User = require("./models/user");

const passportSetup = require("./configs/passport");

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/locaprio",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();
hbs.registerPartials(__dirname + "/views/partials");

// app.use(cors()); system de sécu qui bloque
// alex config express-session
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"]
  })
);

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

//toujours utiliser avt les autres
app.use(
  session({
    secret: "locaprio",
    resave: true,
    saveUninitialized: true
  })
);

passportSetup(app);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "locaprio - Agence immo en ligne";

const index = require("./routes/index");
app.use("/", index);
const authRoutes = require("./routes/auth-routes");
app.use("/", authRoutes(app)); // ça permet de passer app en paramètre et de renvoyer le router mais je comprends pas, lol
const router = require("./routes/uploadRoute");
app.use("/api/file", router);
const userRouter = require("./routes/userRoutes");
app.use("/api/route", userRouter);
const accomodationRouter = require("./routes/accomodationRoutes");
app.use("/api/route", accomodationRouter);

module.exports = app;
