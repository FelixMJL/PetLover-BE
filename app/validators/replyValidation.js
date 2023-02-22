const {body, check} = require("express-validator")
// const CommentModel = require("../models/comment");


exports.store = [
    body("reply_to").notEmpty().withMessage('reply_to is required'),
    body("reply").notEmpty().withMessage('reply is required')
]

// exports.showReply = [
//
// ]