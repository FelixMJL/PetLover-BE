const PostModel = require('../models/post')

//GET all posts

exports.getAllPosts = async (req, res) => {
    const posts = await PostModel.find().exec();
    res.json(posts)
}