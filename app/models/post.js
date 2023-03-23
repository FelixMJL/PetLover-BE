const {Schema, model} = require('mongoose');

const schema = new Schema(
	{
		author: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		content: {
			type: String,
			required: function () {
				return !this.file_url;
			}
		},
		file_type: {
			type: String,
		},
		file_url: {
			type: String,
			required: function () {
				return !this.content;
			}
		},
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment',
			}
		]
	},
	{
		timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
	}
)

module.exports = model('Post', schema)