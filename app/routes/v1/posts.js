const posts = require("../../controllers/posts");
const {Router} = require("express");

const postRouter = Router();

postRouter.get('', posts.getAllPosts);
postRouter.post('', posts.addAPost);


module.exports = postRouter;