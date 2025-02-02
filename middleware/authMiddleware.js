require('dotenv').config();
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        // Get the token from the Authorization header
        const authHeader = req.header('Authorization');
        if (!authHeader) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Ensure token is in the "Bearer <token>" format
        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return res.status(401).json({ message: 'Access denied. Invalid token format.' });
        }

        const token = parts[1]; // Extract the actual token

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded token payload to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.error('Token verification error:', err);
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = authMiddleware;
