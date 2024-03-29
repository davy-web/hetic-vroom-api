const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  profil: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date().getFullYear() + " " + new Date().getDate()
  }
});

module.exports = mongoose.model('Question', questionSchema);