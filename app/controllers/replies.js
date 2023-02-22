const {validationResult} = require("express-validator");
const CommentModel = require("../models/comment");
const UserModel = require("../models/user");

// Add a reply to a comment PL-56
exports.store = async (req, res) => {
    const {author, reply_to, reply} = req.body;
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
    const comment = await CommentModel.findById(reply_to).exec();
    if(!comment) {
        res.status(404).json('comment not found')
        return
    }
    const newReply = new CommentModel({author, reply_to, reply})
    await newReply.save();
    await CommentModel.findByIdAndUpdate(
        reply_to,
        {$addToSet: {replies: newReply._id}}
    )
    res.status(201).json(newReply);
}

// Get a reply PL-65
exports.show = async (req, res) => {
    const {id} = req.params;
    const reply = await CommentModel.findById(id)
        .populate("author",{avatar:1, nickname:1, username:1})
        .populate("reply_to", {username:1})
        .exec()
    if (!reply) {
        res.status(404).json({error: "reply not found"})
        return
    }
    res.json(reply)
}