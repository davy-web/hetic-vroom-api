require("dotenv").config();
const express = require("express");
const userRoute = require("./routes/user");
const questionRoute = require("./routes/question");
const driverRoute = require("./routes/driver");
const carRoute = require("./routes/car");
const authenticationRoute = require("./routes/authentication");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({"message" : "Vroom API"});
});

app.use("/users", userRoute);
app.use("/questions", questionRoute);
app.use("/drivers", driverRoute);
app.use("/cars", carRoute);
app.use("/authentication", authenticationRoute);

module.exports = app;