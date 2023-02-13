const {Router} = require('express');
const apiRouter = require("./v1/api");


const v1Router = Router();

v1Router.use('/posts', apiRouter);

module.exports = v1Router;