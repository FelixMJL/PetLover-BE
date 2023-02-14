const CommentModel = require('../models/comment');

// Find a comment with user details

exports.getAComment = async (req,res) => {
    const commentId = req.params
    const comment = await CommentModel.find(commentId).populate('comment_by').exec();
    console.log(comment);
    res.json(comment);
}

