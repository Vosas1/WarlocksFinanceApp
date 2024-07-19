const jwt = require('jsonwebtoken');
const config = require('../config');

// Middleware to authenticate the user
const auth = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    // Check if no token is provided
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded;  // Attach the decoded token payload to the request object
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Token verification error:', error);
        res.status(401).json({ message: 'Token is not valid' });  // Respond with an error if token verification fails
    }
};

module.exports = auth;
