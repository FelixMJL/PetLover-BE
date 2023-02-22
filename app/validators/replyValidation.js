const {body, check} = require("express-validator")

exports.store = [
    body("reply_to").notEmpty().withMessage('reply_to is required'),
    body("reply").notEmpty().withMessage('reply is required')
]