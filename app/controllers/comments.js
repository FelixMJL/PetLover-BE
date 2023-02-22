const CommentModel = require('../models/comment');
const PostModel = require('../models/post');
const {validationResult} = require("express-validator");
const UserModel = require("../models/user");

// Add a comment
exports.store = async (req, res) => {
    const {author, comment_to, comment} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({errors: errors})
        return
    }
    const user = await UserModel.findById(author).exec();
    if(!user) {
        res.status(404).json('user not found')
        return
    }
    const post = await PostModel.findById(comment_to).exec();
    if(!post) {
        res.status(404).json('post not found')
        return
    }
    const newComment = new CommentModel({author, comment_to, comment});
    await newComment.save();
    await PostModel.findByIdAndUpdate(
        comment_to,
        {$addToSet: {comments: newComment._id}}
    )
    res.status(201).json(newComment);
};

// get a comment with user details
exports.show = async (req, res) => {
    const {id} = req.params;
    const comment = await CommentModel.findById(id)
        .populate('author', {avatar: 1, username: 1, nickname: 1})
        .populate('replies')
        .populate({path: 'replies', populate: {path: 'author'}})
        .exec();
    if (!comment) {
        res.status(404).json({error: 'comment not found'});
        return;
    }
    if (!comment.comment) {
        res.status(404).json({error: 'this is a reply, not a comment'});
        return;
    }
    res.json(comment);
};

// delete a comment
exports.delete = async (req, res) => {
    const {id} = req.params;
    const comment = await CommentModel.findById(id).exec();
    if (!comment) {
        res.status(404).json({error: 'this comment not found'})
        return
    }
    await PostModel.findByIdAndUpdate(
        comment.comment_to,
        {
            $pull: {
                comments: id
            }
        },
    ).exec()
    await CommentModel.findByIdAndDelete(id).exec();
    res.sendStatus(204);
}