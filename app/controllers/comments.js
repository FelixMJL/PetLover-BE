const CommentModel = require('../models/comment');
const PostModel = require('../models/post');

exports.addAComment = async (req, res) => {
  try {
    const newComment = new CommentModel(req.body);
    const currentPost = await PostModel.findById(req.body.comment_to);
    const savedComment = await newComment.save();
    await currentPost.updateOne({
      $push: { comments: newComment },
    });
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(404).json('comment can not be added');
  }
};

// Find a comment with user details
exports.getAComment = async (req, res) => {
  const { id } = req.params;
  const comment = await CommentModel.findById(id).populate('comment_by').exec();
  if (!comment) {
    res.status(404).json({ error: 'comment not found' });
    return;
  }
  res.json(comment);
};

exports.deleteAComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const currentComment = await CommentModel.findById(commentId);
    const postId = currentComment.comment_to;
    const newPost = await PostModel.findByIdAndUpdate(
      postId,
      {
        $pull: { comments: commentId },
      },
      { new: true }
    );
    await CommentModel.findByIdAndDelete(commentId);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(404).json('comment can not be found');
  }
};
