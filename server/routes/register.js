const express = require('express')
const mysql = require("mysql")
const morgan = require('morgan')
var db = require('../db');
const router = express.Router()
const multer = require('multer');
const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

router.use(morgan("tiny"))

router.post("/create", upload.single('profile_image'), async (req, res) => {
  try {
    const { fname, lname, age, pincode, email, username, password } = req.body;
    const profile_image = req.file ? req.file.buffer : null;

    // Check if username already exists
    const usernameCheck = await new Promise((resolve, reject) => {
      db.query('SELECT username FROM customer WHERE username = ?', [username], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });

    if (usernameCheck.length > 0) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Check if email already exists
    const emailCheck = await new Promise((resolve, reject) => {
      db.query('SELECT email FROM customer WHERE email = ?', [email], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });

    if (emailCheck.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // If no duplicates found, proceed with registration
    const query = `
      INSERT INTO customer 
      (fname, lname, age, pincode, email, username, password, profile_image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.query(query, [
      fname, 
      lname, 
      age, 
      pincode, 
      email, 
      username, 
      password,
      profile_image
    ]);

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

module.exports = router