const express = require("express");
const questionSchema = require("../models/question");

const router = express.Router();

// create question
router.post("/create", (req, res) => {
  const question = questionSchema(req.body);
  question
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all questions
router.get("/get", (req, res) => {
  questionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a question
router.get("/get/:id", (req, res) => {
  const { id } = req.params;
  questionSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a question
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  questionSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a question
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, phone, mail, profil, text } = req.body;
  questionSchema
    .updateOne({ _id: id }, { $set: { name, lastname, phone, mail, profil, text } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;