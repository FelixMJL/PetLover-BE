const posts = require("../../controllers/posts");
const {Router} = require("express");
const authGuard = require("../../middleware/authGuards");


const postRouter = Router();

//User login first get the token than use the token do authorization
//POST localhost:3000/api/v1/users/login
postRouter.use(authGuard)
postRouter.get('', posts.getAllPosts);
postRouter.post('', posts.addAPost);
postRouter.delete('/:id', posts.deletePostById);


module.exports = postRouter;