const PostModel = require('../models/post')
const UserModel = require('../models/user')

// Create a post
exports.store = async (req, res) => {
    const {author, content, file_type, file_url} = req.body;
    const post = new PostModel({author, content, file_type, file_url});
    try {
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
    } catch (e) {
        res.status(400).json({message:'At least one of content or file_url needs to be provided.'})
    }
    
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
    const {id} = req.params;
    const post = await PostModel.findById(id).exec();
    if (!post) {
        res.status(404).json({error: "post not found"})
        return
    }
    await UserModel.findByIdAndUpdate(
        post.author,
        {
            $pull: {posts: id}
        },
        {new: true}
    ).exec();
    await PostModel.findByIdAndDelete(id).exec()
    res.sendStatus(204);
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