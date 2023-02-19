const UserModel = require('../models/user')

// Find all users with posts spread  PL-44
exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().populate('posts').exec()
    res.json(users)
}

// Find a user by ID with his all posts spread PL-43
exports.getUserById = async (req, res) => {
    try{
        const { id } = req.params
        const user = await UserModel.findById(id).populate('posts').exec()
        if (!user) {
            res.status(404).json({ error: "user not exist" })
            return
        }
        res.json(user)
    }catch(e){
        res.status(404).json({error:"id must be a string of 12 bytes or a string of 24 hex characters or an integer"})
    }
}

//users registration by username password nickname email PL-41
exports.UserRegistration = async (req, res) => {
    try{
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
            const newUser = new UserModel({username, nickname, email, password});
            console.log(newUser);
            await newUser.hashPassword();
            await newUser.save();
            res.status(201).json(newUser)
        }
    }catch (e) {
        res.status(500).json(e)
    }
}


//Edit user profile PL-42
exports.UserProfileEdit = async (req, res) => {
    try{
        const { id } = req.params
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
            res.status(404).json({ error: 'user is not exist' })
            return
        }
        res.json(userUpdated)
    }catch (e) {
        res.status(404).json({error:"id must be a string of 12 bytes or a string of 24 hex characters or an integer"})
    }
}

// show one user's followings
exports.getAllFollowingsOfAUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findById(id)
        const followings = await UserModel.findById(id).populate(
            'following',
            {avatar: 1, username: 1, nickname: 1, introduction: 1}
        ).exec()
        if (!user) {
            res.status(404).json({ error: "user not exist" })
            return
        }
        res.json(followings)
    } catch (error) {
        res.status(404).json({error:"id must be a string of 12 bytes or a string of 24 hex characters or an integer"})
    }
}

// show one user's followers
exports.getAllFollowersOfAUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findById(id)
        const followers = await UserModel.findById(id).populate(
            'followers',
            {avatar: 1, username: 1, nickname: 1, introduction: 1}
        ).exec()
        if (!user) {
            res.status(404).json({ error: "user not exist" })
            return
        }
        res.json(followers)
    } catch (error) {
        res.status(404).json({error:"id must be a string of 12 bytes or a string of 24 hex characters or an integer"})
    }
}