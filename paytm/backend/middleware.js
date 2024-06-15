const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('./config');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET; 

// function authMiddleware(req, res, next) {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(403).json({
//             message: 'Authorization error: Missing or malformed token',
//             line: 'first'
//         });
//     }

//     const token = authHeader.split(' ')[1];
//     console.log('Token:', token);  // Debugging line

//     try {
//         const decoded = jwt.verify(token, JWT_SECRET);
//         if (decoded.userId) {
//             req.userId = decoded.userId;
//             next();
//         } else {
//             return res.status(403).json({
//                 message: 'Authorization error: Invalid token payload'
//             });
//         }
//     } catch (err) {
//         let errorMessage = 'Authorization error: Token verification failed';
//         if (err.name === 'TokenExpiredError') {
//             errorMessage = 'Authorization error: Token has expired';
//         } else if (err.name === 'JsonWebTokenError') {
//             errorMessage = `Authorization error: ${err.message}`;
//         }

//         return res.status(403).json({
//             message: errorMessage,
//             error: err.message
//         });
//     }
// }
function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    // console.log('Authorization Header:', authHeader);  // Check the entire header

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message: 'Authorization error: Missing or malformed token',
            line: 'first'
        });
    }

    const token = authHeader.split(' ')[1];
    // console.log('Extracted Token:', token);  // Check the extracted token

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({
                message: 'Authorization error: Invalid token payload'
            });
        }
    } catch (err) {
        let errorMessage = 'Authorization error: Token verification failed';
        if (err.name === 'TokenExpiredError') {
            errorMessage = 'Authorization error: Token has expired';
        } else if (err.name === 'JsonWebTokenError') {
            errorMessage = `Authorization error: ${err.message}`;
        }

        // console.error('Token Verification Error:', err);  // Log the exact error

        return res.status(403).json({
            message: errorMessage,
            error: err.message
        });
    }
}


module.exports = authMiddleware;