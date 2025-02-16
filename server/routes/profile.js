const router = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

// Get user profile
router.get('/profile/:id', authorization, async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Fetching profile for username:', id);
    console.log('Authenticated user:', req.user);
    
    // Verify that the requested profile belongs to the authenticated user
    if (id !== req.user.id) {
      console.log('Auth failed - ID mismatch:', { requestedId: id, authUserId: req.user.id });
      return res.status(403).json({ message: 'Not authorized to access this profile' });
    }

    pool.query(
      'SELECT fname, lname, age, pincode, email, username FROM customer WHERE username = ?',
      [id],
      (err, results) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ message: 'Server error' });
        }

        if (!results || results.length === 0) {
          console.log('User not found in database:', id);
          return res.status(404).json({ message: 'User not found' });
        }

        console.log('Profile data retrieved:', results[0]);
        res.json(results[0]);
      }
    );
  } catch (err) {
    console.error('Error in GET profile:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/profile/update/:id', authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const { fname, lname, age, pincode, email } = req.body;
    
    console.log('Received update request:', {
      id,
      body: req.body,
      user: req.user
    });

    // Verify that the profile being updated belongs to the authenticated user
    if (id !== req.user.id) {
      console.log('Authorization failed: id mismatch');
      return res.status(403).json({ message: 'Not authorized to update this profile' });
    }

    const query = 'UPDATE customer SET fname = ?, lname = ?, age = ?, pincode = ?, email = ? WHERE username = ?';
    
    console.log('Executing query with values:', [fname, lname, age, pincode, email, id]);
    
    pool.query(query, [fname, lname, age, pincode, email, id], (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error', details: err.message });
      }
      
      console.log('Update results:', results);
      
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      // Fetch updated user data
      pool.query('SELECT fname, lname, age, pincode, email, username FROM customer WHERE username = ?', 
        [id], 
        (fetchErr, fetchResults) => {
          if (fetchErr) {
            console.error('Fetch error:', fetchErr);
            return res.status(500).json({ error: 'Error fetching updated profile' });
          }
          console.log('Fetch results:', fetchResults);
          res.json({ 
            message: 'Profile updated successfully',
            user: fetchResults[0]
          });
        }
      );
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

module.exports = router; 