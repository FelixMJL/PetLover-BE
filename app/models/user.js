const {Schema, model} = require('mongoose');
const {isEmail} = require("validator");
const bcrypt = require("bcrypt");

const schema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		nickname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			trim: true,
			lowercase: true,
			unique: true,
			required: 'Email address is required',
			validate: [isEmail, 'invalid email'],
		},
		password: {
			type: String,
			required: true,
		},
		location: {
			type: String,
		},
		following: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			}
		],
		followers: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			}
		],
		avatar: {
			type: String,
		},
		introduction: {
			type: String,
		},
		website_url: {
			type: String,
		},
		posts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Post',
			}
		],
	},
	{
		timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
	}
)

schema.methods.hashPassword = async function () {
	// check if password has been hashed
	this.password = await bcrypt.hash(this.password, 12);
};

schema.methods.validatePassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

schema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();
	userObject.id = userObject._id;
	delete userObject._id;
	delete userObject.password;
	delete userObject.tokens;
	delete userObject.refreshToken;
	delete userObject.active;
	delete userObject.__v;
	return userObject;
};

module.exports = model('User', schema)