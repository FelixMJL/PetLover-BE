const comments = require('../../controllers/comments');
const { Router } = require('express');

const commentRouter = Router();

<<<<<<< HEAD
commentRouter.delete('/:id', comments.deleteAComment);
=======
commentRouter.post('/', comments.addAComment);
>>>>>>> 869bad86aa71d671a90b99b1b9889c4911499c80

module.exports = commentRouter;
