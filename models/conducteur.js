const mongoose = require('mongoose');

const conducteurSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  permis: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Conducteur', conducteurSchema)