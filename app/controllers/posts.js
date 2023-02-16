const PostModel = require('../models/post')
const UserModel = require('../models/user')

//GET all posts with user details

exports.getAllPosts = async (req, res) => {
    const posts = await PostModel.find().populate('author',{avatar:1, username:1,nickname:1}).exec();
    // get all posts without user details
    // const posts = await PostModel.find().exec();
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
        res.status(201).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }

    
}