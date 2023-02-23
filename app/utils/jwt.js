const jwt = require('jsonwebtoken');

const JWT_KEY = "petLover";

const generateToken = (payload) => {
    return jwt.sign(payload, JWT_KEY, {expiresIn: '24h'});
};

const validateToken = (token) => {
    return jwt.verify(token, JWT_KEY);
};

module.exports = {
    generateToken,
    validateToken,
};