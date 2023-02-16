const CommentModel = require('../models/comment');
const PostModel = require('../models/post');

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
