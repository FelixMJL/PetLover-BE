const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        content: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
        },
        video: {
            type: String,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            }
        ]
    },
    {
        timestamps: {createdAt:'created_at',updatedAt:'updated_at'}
    }
)

module.exports = model('Post',schema)