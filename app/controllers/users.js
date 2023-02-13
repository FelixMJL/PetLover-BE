const UserModel = require('../models/user')

exports.getAllUsers = async (req,res) => {
    const users = await UserModel.find().exec();
    res.json(users)
}