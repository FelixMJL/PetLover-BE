const comments = require('../../controllers/comments');
const { Router } = require('express');

const commentRouter = Router();

commentRouter.post('/', comments.addAComment);

module.exports = commentRouter;
