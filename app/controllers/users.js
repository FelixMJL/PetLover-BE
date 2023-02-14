const UserModel = require('../models/user')

exports.getAllUsers = async (req,res) => {
    const users = await UserModel.find().populate('posts').exec();
    res.json(users)
}