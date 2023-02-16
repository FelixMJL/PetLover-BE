const comments = require('../../controllers/comments');
const { Router } = require('express');

const commentRouter = Router();

commentRouter.delete('/:id', comments.deleteAComment);

module.exports = commentRouter;
