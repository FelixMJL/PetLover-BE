const posts = require("../../controllers/posts");
const {Router} = require("express");

const postRouter = Router();

postRouter.get('', posts.getAllPosts);
postRouter.post('', posts.addAPost);
postRouter.delete('/:id', posts.deletePostById);


module.exports = postRouter;