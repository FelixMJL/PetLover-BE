const PostModel = require('../models/post')
const UserModel = require('../models/user')

// Create a post
exports.store = async (req, res) => {
    const {author, content, photo, video} = req.body;
    const post = new PostModel({author, content, photo, video});
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
}

// Find all posts with user detail
// Situation：Recommend for you page
exports.index = async (req, res) => {
    const posts = await PostModel.find().populate(
        'author',
        {avatar: 1, username: 1, nickname: 1})
        .sort({created_at: -1})
        .exec();
    res.json(posts)
}

// Get post by id
// Show all comments with user details pl-66
exports.show = async (req, res) => {
    const {id} = req.params
    const post = await PostModel.findById(id).populate(
        'author',
        {avatar: 1, username: 1, nickname: 1})
        .populate({path: 'comments', populate: {path: 'author'}, options: {sort: ({created_at: -1})}})
        .exec()
    if (!post) {
        res.status(404).json({error: 'post not found'})
        return
    }
    res.json(post)
}

//Delete a post
exports.delete = async (req, res) => {
    const {id} = req.params
    const {author} = req.body;
    const post = await PostModel.findByIdAndDelete(id).exec()
    if (!post) {
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
}

// Find following's posts
exports.getAllPostsOfFollowing = async (req, res) => {
    const {id} = req.params
    const user = await UserModel.findById(id).exec()
    if (!user) {
        res.status(404).json({error: 'user not found'})
        return
    }
    const followings = user.following
    const posts = await PostModel.find({author: {$in: followings}}).populate(
        'author',
        {avatar: 1, username: 1, nickname: 1})
        .sort({created_at: -1})
        .exec();
    res.json(posts)
}