const comments = require('../../controllers/comments');
const {Router} = require('express');
const authGuard = require("../../middleware/authGuards");
const replyValidation = require("../../validators/replyValidation")
const commentValidation = require("../../validators/commentValidation")
const commentRouter = Router();

commentRouter.post('/comments', authGuard, commentValidation.store, comments.store);
commentRouter.post('/replies', authGuard, replyValidation.store, comments.store);
commentRouter.get('/comments/:id', authGuard, comments.show);
commentRouter.get('/replies/:id', authGuard, comments.showReply);
commentRouter.delete('/comments/:id', authGuard, comments.delete);

module.exports = commentRouter;
