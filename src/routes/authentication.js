require("dotenv").config();
const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = require("../models/user");

const router = express.Router();

// inscription
router.post("/register", async (req, res) => {
  try {
    const { email, password, prenom, nom } = req.body;

    if (!(email && password && prenom && nom)) {
      return res.json({ message: "All input is required" });
    }

    const old_user = await userSchema.findOne({ email });

    if (old_user) {
      return res.json({ message: "User Already Exist. Please Login" });
    }

    const password_encrypted = await bcrypt.hash(password, 10);

    const user = await userSchema.create({
      email: email,
      password: password_encrypted,
      prenom: prenom,
      nom: nom
    });
    
    const token = jwt.sign(
      { user_id: user._id, email: user.email },
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );

    user.token = token;

    return res.json(user);
  }
  catch (err) {
    console.log(err);
  }
});

// // connexion
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!(email && password)) {
//       res.status(400).send("All input is required");
//     }
    
//     const user = await userSchema.findOne({ email });

//     if (user && (await bcrypt.compare(password, user.password))) {
//       const token = jwt.sign(
//         { user_id: user._id, email },
//         process.env.TOKEN_KEY,
//         { expiresIn: "2h"}
//       );

//       user.token = token;

//       res.status(200).json(user);
//     }
//     res.status(400).send("Invalid Credentials");
//   }
//   catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;