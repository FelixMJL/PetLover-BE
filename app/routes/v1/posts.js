const posts = require("../../controllers/posts");
const {Router} = require("express");
const authGuard = require("../../middleware/authGuards");


const postRouter = Router();


//User login first get the token than use the token do authorization
//POST localhost:3000/api/v1/users/login
postRouter.use(authGuard);
postRouter.get('', posts.index);
postRouter.post('', posts.store);
postRouter.delete('/:id', posts.delete);
postRouter.get('/users/:id', posts.getAllPostsOfFollowing);
postRouter.get('/:id', posts.show);



module.exports = postRouter;