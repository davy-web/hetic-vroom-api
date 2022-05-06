// require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// App
const app = express();
app.set('view engine', 'ejs');

// Settings
const port = 8080;

// Route
app.get('/', (req, res) => {
  res.status(200).send("Hello Davy !");
});

// Server listening
app.listen(port, () => {
  console.log("Server écoute le port", port);
});