const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        comment_by: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            }
        ],
        parent_id: {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        }
    },
    {
        timestamps: {createdAt:'created_at',updatedAt:'updated_at'}
    }
)

module.exports = model('Comment',schema)