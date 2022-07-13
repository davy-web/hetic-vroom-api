require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const questionRoute = require("./routes/question");
const driverRoute = require("./routes/driver");
const authenticationRoute = require("./routes/authentication");

const port = process.env.PORT || 80;
const app = express();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Vroom API");
});

app.use("/users", userRoute);
app.use("/questions", questionRoute);
app.use("/drivers", driverRoute);
app.use("/authentication", authenticationRoute);

app.listen(port, () => console.log("Server listening to", port));