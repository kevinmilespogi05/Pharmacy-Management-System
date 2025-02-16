const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('token');

    // Check if token exists
    if (!token) {
      return res.status(403).json({ message: 'No token, authorization denied' });
    }

    // Verify token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Add user info to request
    req.user = payload.user;
    
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json({ message: 'Token is not valid' });
  }
}; 