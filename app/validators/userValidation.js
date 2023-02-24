const { body } = require('express-validator');
//username, password, nickname, email
const register = [
    body('username')
        .notEmpty().withMessage('username is required'),
    body('password')
        .notEmpty().withMessage('password is required')
        .matches(/^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{8,}$/)
        .withMessage('The password must be at least 8 characters long and contain numbers, uppercase and lowercase letters'),
    body('nickname')
        .notEmpty().withMessage('nickname is required'),
    body('email')
        .notEmpty().withMessage('email is required')
        .isEmail().withMessage('e-mail format error'),
];

const login = [
    body('email')
        .notEmpty().withMessage('email is required')
        .isEmail().withMessage('e-mail format error'),
    body('password')
        .notEmpty().withMessage('password is required'),
];


module.exports = {
    register,
    login
};
