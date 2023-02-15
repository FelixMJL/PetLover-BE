const CommentModel = require('../models/comment');

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
