const posts = require("../../controllers/posts");
const {Router} = require("express");
const authGuard = require("../../middleware/authGuards");
const postRouter = Router();

//User login first get the token than use the token do authorization
postRouter.get('/posts', authGuard, posts.index);
postRouter.post('/posts', authGuard, posts.store);
postRouter.delete('/posts/:id', authGuard, posts.delete);
postRouter.get('/posts/:id', authGuard, posts.show);
postRouter.get('/posts/users/:id', authGuard, posts.getAllPostsOfFollowing);


module.exports = postRouter;