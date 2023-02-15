const PostModel = require('../models/post')

//GET all posts with user details

exports.getAllPosts = async (req, res) => {
    const posts = await PostModel.find().populate('author',{avatar:1, username:1,nickname:1}).exec();
    // get all posts without user details
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

//Delete a post
exports.deletePostById = async (req, res) => {
    const {id} = req.params
    const post = await PostModel.findByIdAndDelete(id).exec()
    if(!post){
        res.status(404).json({error: 'post not found'})
        return
    }
    await PostModel.updateMany(
        {posts: id},
        {
            $pull: {
                posts: id
            }
        }
    ).exec()
    res.sendStatus(204)
}