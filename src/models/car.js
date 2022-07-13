const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  car_id: {
    type: Number,
    required: true
  },
  photo_car: {
    type: String,
    required: true
  },
  kilometrage: {
    type: Number,
    required: true
  },
  date_dernier_revision: {
    type: Date,
    required: true
  },
  nombre_place_voiture: {
    type: Number,
    required: true
  },
  chaise_bebe: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Car', carSchema);