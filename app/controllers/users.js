const UserModel = require('../models/user')

// Find all users with posts spread  PL-44
exports.getAllUsers = async (req, res) => {
    const users =await UserModel.find().populate('posts').exec()
    res.json(users)
}

// Find a user by ID with his all posts spread PL-43
exports.getUserById = async (req, res) => {
    let id = req.params.id
    user = await UserModel.findById(id).populate('posts following followers').exec()
    res.json(user)
}

//users registration by username password nickname email PL-41
exports.UserRegistration = async (req, res) => {
    const {
        username,
        password,
        nickname,
        email,
    } = req.body
    //get all users username and E-mail first and export as object 
    const allUsers = await UserModel.find({}, "username email -_id").exec()
    //avoid  duplicate username and E-mail
    const user = allUsers.find(user => user.username === username || user.email === email)
    if (user && user.username === username) {
        res.send(`User name --${username}-- has been used please change another one`)
    } else if (user && user.email === email) {
        res.send(`E-mail --${email}-- has been used please change another one`)
    } else {
        UserModel.create([
            {
                username: `${username}`,
                password: `${password}`,
                nickname: `${nickname}`,
                email: `${email}`,
            }
        ], (err, doc) => {
            if (!err) {
                res.status(201).json(doc)
            }
        })
    }
}


//Edit user profile PL-42
exports.UserProfileEdit = async (req, res) => {
    const { id } = req.params
    const {
        username,
        password,
        nickname,
        email,
        location,
        avatar,
        introduction,
        website_url,
    } = req.body


    const allUsers = await UserModel.find({}, "username email -_id").exec()
    //avoid  duplicate username and E-mail
    const user = allUsers.find(user => user.username === username || user.email === email)
    if (user && user.username === username) {
        res.send(`User name --${username}-- has been used please change another one`)
    } else if (user && user.email === email) {
        res.send(`E-mail --${email}-- has been used please change another one`)
    } else {
        const userUpdated = await UserModel.findByIdAndUpdate(
            id,
            {
                username,
                password,
                nickname,
                email,
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
            res.status(404).json({ error: 'user is not exist' })
            return
        }
        res.json(userUpdated)
    }
}