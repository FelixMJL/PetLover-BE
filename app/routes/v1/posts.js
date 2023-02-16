const posts = require("../../controllers/posts");
const {Router} = require("express");

const postRouter = Router();

postRouter.get('', posts.index);
postRouter.post('', posts.store);
postRouter.delete('/:id', posts.delete);
postRouter.get('/users/:id', posts.getAllPostsOfFollowing);
postRouter.get('/:id', posts.show);


module.exports = postRouter;