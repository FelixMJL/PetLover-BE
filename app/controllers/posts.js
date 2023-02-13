const PostModel = require('../models/post')

//GET all posts with user details

exports.getAllPosts = async (req, res) => {
    const posts = await PostModel.find().populate('author',{avatar:1, username:1,nickname:1}).exec();
    // const posts = await PostModel.find().exec();
    res.json(posts)
}

//Create a post
exports.addAPost = async (req,res) => {
    const {author, content, photo, video} = req.body;
    const post = new PostModel({author,content,photo,video});
    await post.save();
    res.status(201).json(post)
}