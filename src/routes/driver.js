const express = require("express");
const driverSchema = require("../models/driver");

const router = express.Router();

// create driver
router.post("/create", (req, res) => {
  const driver = driverSchema(req.body);
  driver
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all drivers
router.get("/get", (req, res) => {
  driverSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a driver
router.get("/get/:id", (req, res) => {
  const { id } = req.params;
  driverSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a driver
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  driverSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a driver
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, phone, mail, age, photo_driver, photo_permis, casier_judiciaire } = req.body;
  driverSchema
    .updateOne({ _id: id }, { $set: { name, lastname, phone, mail, age, photo_driver, photo_permis, casier_judiciaire } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;