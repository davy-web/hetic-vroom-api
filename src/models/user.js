const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  photo_conducteur: {
    type: String
  },
  photo_permis: {
    type: String
  },
  age: {
    type: Number
  },
  telephone: {
    type: String
  },
  casier_judiciaire: {
    type: String
  },
  token: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);