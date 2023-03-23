const {body} = require("express-validator")

exports.store = [
    body("comment_to").notEmpty().withMessage('comment_to is required'),
    body("comment").notEmpty().withMessage('comment is required')
]