const UserModel = require('../models/user')

// Find all users with posts spread  PL-44
exports.getAllUsers = async (req, res) => {
    const users = UserModel.find().populate('posts').exec()
    res.json(users)
}

// Find a user by ID with his all posts spread PL-43
exports.getUserById = async (req, res) => {
    let id = req.params.id
    user = await user.findById(id).populate['posts', 'following', 'followers']
    res.json(user)
}

//users registration by userName password nickName email PL-41
exports.UserRegistration = async (req, res) => {
    const {
        userName,
        password,
        nickName,
        email,
    } = req.body
    //get all users userName and E-mail first and export as object 
    const allUsers = await UserModel.find({}, "userName email -_id").exec()
    //avoid  duplicate userName and E-mail
    const user = allUsers.find(user => user.userName === userName || user.email === email)
    if (user && user.userName === userName) {
        res.send(`User name --${userName}-- has been used please change another one`)
    } else if (user && user.email === email) {
        res.send(`E-mail --${email}-- has been used please change another one`)
    } else {
        UserModel.create([
            {
                userName: `${userName}`,
                password: `${password}`,
                nickName: `${nickName}`,
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
    console.log(111)
    const { id } = req.params
    const {
        userName,
        password,
        nickName,
        email,
        location,
        avatar,
        introduction,
        website_url,
    } = req.body


    const allUsers = await UserModel.find({}, "userName email -_id").exec()
    //avoid  duplicate userName and E-mail
    const user = allUsers.find(user => user.userName === userName || user.email === email)
    if (user && user.userName === userName) {
        res.send(`User name --${userName}-- has been used please change another one`)
    } else if (user && user.email === email) {
        res.send(`E-mail --${email}-- has been used please change another one`)
    } else {
        const userUpdated = await UserModel.findByIdAndUpdate(
            id,
            {
                userName,
                password,
                nickName,
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