const express = require('express');
const posts = require("../../controllers/posts");
const router = new express.Router();


router.get('', posts.getAllPosts);


module.exports = router;