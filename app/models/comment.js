const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        comment_to: {
            type: Schema.Types.ObjectId,
            ref: "Post",
        },
        comment: {
            type: String,
        },
        reply: {
            type: String,
        },
        replies: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
        reply_to: {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        },
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
);

module.exports = model("Comment", schema);