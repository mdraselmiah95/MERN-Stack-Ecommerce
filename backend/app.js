const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const errorMiddleware = require("./middleware/error");

//TODO : Setting up config file
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});

//TODO : Route Imports
const user = require("./routes/user.route");

app.use("/api/v1", user);

//TODO : Middleware for Errors
app.use(errorMiddleware);

module.exports = app;

// video: 01:08:00
