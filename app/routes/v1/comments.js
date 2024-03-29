const comments = require('../../controllers/comments');
const {Router} = require('express');
const authGuard = require("../../middleware/authGuards");
const commentValidation = require("../../validators/commentValidation")
const commentRouter = Router();

commentRouter.post('/comments', authGuard, commentValidation.store, comments.store);
commentRouter.get('/comments/:id', authGuard, comments.show);
commentRouter.delete('/comments/:id', authGuard, comments.delete);

module.exports = commentRouter;
