const comments = require('../../controllers/comments');
const { Router } = require('express');
const authGuard = require("../../middleware/authGuards");

const commentRouter = Router();

commentRouter.use(authGuard)
commentRouter.post('', comments.store);
commentRouter.post('/replies', comments.addAReply);
commentRouter.get('/:id', comments.show);
commentRouter.delete('/:id', comments.delete);



module.exports = commentRouter;
