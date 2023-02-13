const {Router} = require('express');
const postRouter = require("./v1/posts");
const userRouter = require("./v1/users");


const v1Router = Router();

v1Router.use('/posts', postRouter);
v1Router.use('/users',userRouter);

module.exports = v1Router;