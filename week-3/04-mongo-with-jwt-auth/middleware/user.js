// Middleware for handling auth

const jwt = require('jsonwebtoken');
const { JWT_SECRETS } = require('../db_secrets')
function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtTokens = words[1];

    const decoded = jwt.verify(jwtTokens, JWT_SECRETS);
    if (decoded.username) {
        next();
    }
    else {
        return res.status(403).json({
            message: "you are not authenticated"
        })
    }
}

module.exports = userMiddleware;