const UserModel = require('../models/user')
const {generateToken} = require('../utils/jwt');

//users registration by username password nickname email PL-41 PL-49
//POST localhost:3000/api/v1/users/register
exports.UserRegistration = async (req, res) => {
    try {
        const {username, password, nickname, email} = req.body;

        if (await UserModel.findOne({username}).exec()) {
            res.send(`User name --${username}-- has been used please change another one`)
            return;
        }

        if (await UserModel.findOne({email}).exec()) {
            res.send(`E-mail --${email}-- has been used please change another one`)
            return;
        }

        const user = new UserModel({username, nickname, email, password});
        await user.hashPassword();
        await user.save();
        const token = generateToken({id: user.id,email}); // roles: []
        res.status(201).json({email, token});
    } catch (e) {
        res.status(500).json({error: 'server error'})
    }
}


// Find all users with posts spread  PL-44
// GET localhost:3000/api/v1/users
exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().populate('posts').exec()
    res.json(users)
}

// Find a user by ID with his all posts spread PL-43
// GET localhost:3000/api/v1/users/:id
exports.getUserById = async (req, res) => {
    try {
        const {id} = req.params
        const user = await UserModel.findById(id).populate('posts').exec()
        if (!user) {
            res.status(404).json({error: "user not exist"})
            return
        }
        res.json(user)
    } catch (e) {
        res.status(404).json({error: 'id must be a string of 12 bytes or a string of 24 hex characters or an integer'})
    }
}

//Edit user profile PL-42
//PUT localhost:3000/api/v1/users/:id
exports.UserProfileEdit = async (req, res) => {
    try {
        const {id} = req.params
        const {
            nickname,
            location,
            avatar,
            introduction,
            website_url,
        } = req.body

        const userUpdated = await UserModel.findByIdAndUpdate(
            id,
            {
                nickname,
                location,
                avatar,
                introduction,
                website_url
            },
            {
                new: true
            }
        ).exec()
        if (!userUpdated) {
            res.status(404).json({error: 'user is not exist'})
            return
        }
        res.status(201).json(userUpdated)
    } catch (e) {
        res.status(404).json({error: 'id must be a string of 12 bytes or a string of 24 hex characters or an integer'})
    }
}