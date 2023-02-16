const CommentModel = require('../models/comment');

exports.addAComment = async (req, res) => {
  try {
    const newComment = new CommentModel(req.body);
    const currentPost = await PostModel.findById(req.body.comment_to);
    // console.log(newComment);
    // console.log(currentPost);
    const savedComment = await newComment.save();

    await currentPost.updateOne({
      $push: { comments: newComment },
    });
    // console.log(currentPost);
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(404).json('comment can not be added');
  }
};
