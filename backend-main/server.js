if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//packages
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

//routes
const routes = require("./app/routes/index");

const app = express();

//Database Connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

//Configs
var corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

//enable cors
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//Set File Limit
app.use(bodyParser.json({ limit: "50mb" }));
//parse cookies
app.use(cookieParser());

//Routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Welcome..");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Port Listening on ${PORT}`);
});
