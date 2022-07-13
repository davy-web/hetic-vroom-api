const mongoose = require("mongoose");

const driverSchema = mongoose.Schema({
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
  age: {
    type: Number,
    required: true
  },
  photo_driver: {
    type: String,
    required: true
  },
  photo_permis: {
    type: String,
    required: true
  },
  casier_judiciaire: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Driver', driverSchema);