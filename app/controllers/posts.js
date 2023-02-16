const PostModel = require('../models/post')
const UserModel = require('../models/user')

// Find all posts with user detail
// Situation：Recommend for you page
exports.getAllPosts = async (req, res) => {
    const posts = await PostModel.find().populate(
        'author',
        {avatar: 1, username: 1, nickname: 1})
        .sort({created_at:-1})
        .exec();
    res.json(posts)
}

//Create a post
exports.addAPost = async (req,res) => {
    try {
        const {author, content, photo, video} = req.body;
        const post = new PostModel({author,content,photo,video});
        const savedPost = await post.save();
        await UserModel.findByIdAndUpdate(
            author, 
            {
                $push: {
                    posts: savedPost._id
                }
            }
        )
        await post.save();
        res.status(201).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//Delete a post
exports.deletePostById = async (req, res) => {
    try {
        const {id} = req.params
        const {author} = req.body;
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
        await UserModel.updateOne(
            author, 
            {
                $pull: {
                    posts: id
                }
            }
        ).exec()
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json(error.message)
    }  
}