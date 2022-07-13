const express = require("express");
const carSchema = require("../models/car");

const router = express.Router();

// create car
router.post("/create", (req, res) => {
  const car = carSchema(req.body);
  car
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all cars
router.get("/get", (req, res) => {
  carSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a car
router.get("/get/:id", (req, res) => {
  const { id } = req.params;
  carSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a car
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  carSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a car
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { car_id, photo_car, kilometrage, date_dernier_revision, nombre_place_voiture, chaise_bebe } = req.body;
  carSchema
    .updateOne({ _id: id }, { $set: { car_id, photo_car, kilometrage, date_dernier_revision, nombre_place_voiture, chaise_bebe } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;