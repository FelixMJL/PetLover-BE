const PostModel = require('../models/posts')

//GET all posts

exports.getAllPosts = async (req, res) => {
    const posts = await PostModel.find().exec();
    res.json(posts)
}