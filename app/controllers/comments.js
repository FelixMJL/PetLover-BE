const CommentModel = require('../models/comment');
const PostModel = require('../models/post');

exports.store = async (req, res) => {
    const {author, comment_to, comment} = req.body;
    if (!comment_to || !comment) {
        res.status(400).json("comment_to and comment are required")
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

// Find a comment with user details
exports.show = async (req, res) => {
    const {id} = req.params;
    const comment = await CommentModel.findById(id)
        .populate('author',{avatar: 1, username: 1, nickname: 1})
        .populate('replies')
        .populate({path:'replies',populate:{path:'author'}})
        .exec();
    if (!comment) {
        res.status(404).json({error: 'comment not found'});
        return;
    }
    res.json(comment);
};

exports.delete = async (req, res) => {
    const {id} = req.params;
    const comment = await CommentModel.findById(id).exec();
    if(!comment) {
        res.status(404).json({error:'this comment not found'})
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

// Add a reply to a comment PL-56
exports.addAReply = async (req, res) => {
    const {author, reply_to, reply} = req.body;
    if (!reply_to || !reply) {
        res.status(400).json("reply_to and reply are required")
        return
    }
    const newReply = new CommentModel({author,reply_to,reply})
    await newReply.save();
    await CommentModel.findByIdAndUpdate(
        reply_to,
        {$addToSet: {replies: newReply._id}}
    )
    res.status(201).json(newReply);
}