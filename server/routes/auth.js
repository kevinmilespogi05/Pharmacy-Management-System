require('dotenv').config()

const jwt = require('jsonwebtoken');
const express = require('express');
const db = require('../db');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

const router = express.Router();

// Get user profile data
router.get('/profile/:userId', async (req, res) => {
    try {
        const username = req.params.userId;
        const query = 'SELECT fname, lname, age, pincode, email, username FROM customer WHERE username = ?';
        
        db.query(query, [username], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }
            
            if (results.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            
            res.json(results[0]);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Update user profile
router.put('/profile/update/:userId', async (req, res) => {
    try {
        const username = req.params.userId;
        const { fname, lname, age, pincode, email } = req.body;
        
        const query = 'UPDATE customer SET fname = ?, lname = ?, age = ?, pincode = ?, email = ? WHERE username = ?';
        
        db.query(query, [fname, lname, age, pincode, email, username], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' });
            }
            
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            
            res.json({ message: 'Profile updated successfully' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;