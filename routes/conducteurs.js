const express = require('express');
const Conducteur = require('./../models/conducteur');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.render('conducteur');
  }
  catch (e) {
    console.log(e);
    res.redirect('/');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const conducteur = await Conducteur.findById(req.params.id);

    if (conducteur != null) {
      res.render('conducteur', { conducteur: conducteur });
    }
    else {
      res.redirect('/');
    }
  }
  catch (e) {
    console.log(e);
    res.redirect('/');
  }
});

router.post('/', async (req, res) => {
  try {
    const conducteur = new Conducteur({
      nom: req.body.nom,
      prenom: req.body.prenom,
      age: req.body.age,
      permis: req.body.permis
    });

    await conducteur.save();
    res.render(`conducteur`);
  }
  catch (e) {
    console.log(e);
    res.render(`conducteur`);
  }
});

module.exports = router