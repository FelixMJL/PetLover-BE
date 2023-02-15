const express = require('express');
const posts = require("../../controllers/posts");
const {Router} = require("express");
// const router = new express.Router();

const postRouter = Router();

postRouter.get('', posts.getAllPosts);
postRouter.post('', posts.addAPost);
postRouter.delete('/:id', posts.deletePostById);


module.exports = postRouter;