const comments = require('../../controllers/comments');
const { Router } = require('express');
const authGuard = require("../../middleware/authGuards");

const commentRouter = Router();

commentRouter.use(authGuard)
commentRouter.delete('/:id', comments.deleteAComment);
commentRouter.post('/', comments.addAComment);

commentRouter.post('/', comments.addAComment);
commentRouter.get('/:id', comments.getAComment);
commentRouter.delete('/:id', comments.deleteAComment);

module.exports = commentRouter;
