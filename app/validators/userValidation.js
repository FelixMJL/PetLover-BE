const { body } = require('express-validator');
//username, password, nickname, email
const register = [
    body('username')
        .notEmpty().withMessage('username is required')
        .isString().withMessage('username must be a string')
        .isLength({min: 2, max:12}).withMessage('username length is 2-12 characters'),
    body('password')
        .notEmpty().withMessage('password is required')
        .isString().withMessage('password must be a string')
        .isLength({min: 8, max:8}).withMessage('Password must be 8 digits')
        .matches(/^[a-zA-Z]+[0-9]+$/)
        .withMessage('The first character of the password must be a letter and the last character must be a number'),
    body('nickname')
        .notEmpty().withMessage('nickname is required')
        .isString().withMessage('username must be a string')
        .isLength({min: 2, max:12}).withMessage('nickname length is 2-12 characters'),
    body('email')
        .notEmpty().withMessage('email is required')
        .isString().withMessage('email must be a string')
        .isEmail().withMessage('e-mail format error'),
];

const login = [
    body('email')
        .notEmpty().withMessage('email is required')
        .isString().withMessage('email must be a string')
        .isEmail().withMessage('e-mail format error'),
    body('password')
        .notEmpty().withMessage('password is required')
        .isString().withMessage('password must be a string')
        .isLength({min: 8, max:8}).withMessage('Password must be 8 digits')
        .matches(/^[a-zA-Z]+[0-9]+$/)
        .withMessage('The first character of the password must be a letter and the last character must be a number'),
];


module.exports = {
    register,
    login
};
