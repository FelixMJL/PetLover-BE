const comments = require("../../controllers/comments");
const {Router} = require("express");

const commentRouter = Router();

commentRouter.get('/:id', comments.getAComment);

module.exports = commentRouter;