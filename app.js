const express = require("express");
const app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
require("custom-env").env(process.env.NODE_ENV);
//MongoDb Connection
require("./models/db.js");

var index = require("./routes/index");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/", index);

module.exports = app;
