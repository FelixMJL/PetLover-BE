const {Router} = require('express');
const postRouter = require("./v1/posts");
const userRouter = require("./v1/users");
const commentRouter = require("./v1/comments");


const v1Router = Router();

v1Router.use('/posts', postRouter);
v1Router.use('/users',userRouter);
v1Router.use('/comments',commentRouter);

module.exports = v1Router;