require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const config = require("./config");
const conducteurRouter = require('./routes/conducteurs');

const port = 8080;
const app = express();

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connecté à MongoDB Altas")).catch((error) => console.log(error));

app.use(express.static('views'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render("index", {url : config.url_site});
});

app.use('/conducteurs', conducteurRouter);

app.listen(port, () => {
  console.log("Server écoute le port", port);
});