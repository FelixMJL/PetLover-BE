const comments = require('../../controllers/comments');
const { Router } = require('express');
const authGuard = require("../../middleware/authGuards");
const replyValidation = require("../../validators/replyValidation")
const commentValidation = require("../../validators/commentValidation")

const commentRouter = Router();

commentRouter.use(authGuard)
commentRouter.post('', commentValidation.store, comments.store);
commentRouter.post('/replies', replyValidation.store, comments.store);
commentRouter.get('/:id', comments.show);
commentRouter.delete('/:id', comments.delete);



module.exports = commentRouter;
