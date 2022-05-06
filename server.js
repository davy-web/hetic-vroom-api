require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// App
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("views"));
app.use(express.urlencoded({ extended: false }));

// Settings
const port = 8080;

// Route
app.get('/', (req, res) => {
  res.status(200).render("index");
});

// Route conducteur
const conducteurRouter = require('./routes/conducteurs');
app.use('/conducteurs', conducteurRouter);

// Mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connecté à MongoDB Altas"))
  .catch((error) => console.log(error));

// Server listening
app.listen(port, () => {
  console.log("Server écoute le port", port);
});