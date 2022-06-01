const express = require('express');
const router = express.Router();
const config = require("../config");
const Conducteur = require("../models/conducteur");

router.get('/ajouter', async (req, res) => {
  res.render('conducteurs/ajouter', {url : config.url_site});
});

router.get('/', async (req, res) => {
  res.render('conducteurs/index', {url : config.url_site});
});

router.post('/', async (req, res) => {
  const conducteur = new Conducteur({
    prenom: req.body.prenom,
    nom: req.body.nom,
    email: req.body.email,
    password: req.body.password
  });

  try {
    conducteur = await conducteur.save();
    res.redirect('/conducteurs');
  }
  catch (e) {
    res.render('conducteurs/ajouter', {url : config.url_site});
  }
});

module.exports = router