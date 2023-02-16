const comments = require('../../controllers/comments');
const { Router } = require('express');

const commentRouter = Router();

commentRouter.post('/', comments.addAComment);
commentRouter.get('/:id', comments.getAComment);
commentRouter.delete('/:id', comments.deleteAComment);

module.exports = commentRouter;
