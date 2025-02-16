const express = require('express')
const mysql = require("mysql")
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
var db = require('../db');
const router = express.Router()

router.use(morgan("tiny"))

router.post("/authenticate", (req, res) => {
  const { username, password } = req.body;
  
  console.log("Login attempt for username:", username);

  if(!username || !password) {
    console.log("Login failed: Missing username or password");
    return res.status(400).json({
      login: 0,
      message: 'Username and password are required'
    });
  }
  
  // Get user data including the ID
  const query = "SELECT username, password FROM customer WHERE username = ?";
  
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({
        login: 0,
        message: 'Database error occurred',
        error: err.message
      });
    }

    if (!results || results.length === 0) {
      console.log("Login failed: User not found");
      return res.status(400).json({
        login: 0,
        message: 'Invalid username or password'
      });
    }

    const user = results[0];
    
    // For now, using direct password comparison since we haven't implemented hashing yet
    // TODO: Implement password hashing in the future
    if (user.password !== password) {
      console.log("Login failed: Invalid password");
      return res.status(400).json({
        login: 0,
        message: 'Invalid username or password'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { user: { id: username } },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    console.log("Login successful for user:", username);
    return res.status(200).json({
      login: 1,
      token,
      userId: username,
      message: 'Login successful'
    });
  });
});

module.exports = router