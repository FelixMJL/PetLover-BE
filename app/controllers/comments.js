const CommentModel = require('../models/comment');
const PostModel = require('../models/post');

<<<<<<< HEAD
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
=======
>>>>>>> 1cafc81e7a3519c86dc3914d0c7e598b897d0c62
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

exports.deleteAComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const currentComment = await CommentModel.findById(commentId);
    const postId = currentComment.comment_to;
    const newPost = await PostModel.findByIdAndUpdate(
        postId,
        {
          $pull: {comments: commentId},
        },
        {new: true}
    );
    await CommentModel.findByIdAndDelete(commentId);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(404).json('comment can not be found');
  }
}


