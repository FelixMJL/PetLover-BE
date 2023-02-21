const UserModel = require('../models/user')
const {generateToken} = require('../utils/jwt');

//users registration by username password nickname email PL-41 PL-49
//POST localhost:3000/api/v1/users
exports.UserRegistration = async (req, res) => {
    try {
        const {username, password, nickname, email} = req.body;
        if(!username||!password||!nickname||!email){
            res.status(401).json({error: 'register info is not complete'});
            return;
        }
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

// user login PL-50
// POST localhost:3000/api/v1/users/login
exports.userLogin = async (req, res) => {
    try {
        const {email, password} = req.body
        if(!email||!password){
            res.status(401).json({error: 'login info is not complete'});
            return;
        }
        const user = await UserModel.findOne({email}).exec()
        if (!user) {
            res.status(401).json({error: 'invalid email or password'});
            return;
        }

        if (! await user.validatePassword(password.toString())) {
            res.status(401).json({error: 'invalid email or password'});
            return;
        }
        const token = generateToken({id: user.id,email}); // roles: []
        res.status(201).json({email, token});
    } catch(e){
        res.status(500).send({error: 'server error'})
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
//Follow a user PL-52
exports.followAUser = async (req, res) => {
   try {
        const { followedId, followerId } = req.params
        const followedUser = await UserModel.findById(followedId).exec()
		const follower = await UserModel.findById(followerId).exec()
		// check if student and course exists
  		if ( !followedUser || !follower) {
    		res.status(404).json({ error: 'user not found' });
   			return;
  		 }
        followedUser.followers.addToSet(followerId);
		await followedUser.save();
		follower.following.addToSet(followedId);
		await follower.save();
        res.json(followedUser)
    }catch(e){
        res.status(500).json(e.message)
    } 
} 

//unfollow a user PL-53
exports.unfollowAUser = async (req, res) => {
    try {
        const { followedId, followerId } = req.params
        let followedUser = await UserModel.findById(followedId).exec()
		const follower = await UserModel.findById(followerId).exec()
		// check if student and course exists
  		if (!followedUser || !follower) {
    		res.status(404).json({ error: 'user not found' });
   			return;
  		 }
		  followedUser = await UserModel.findByIdAndUpdate(
			followedId,
			{
			  $pull: {
				followers: followerId,
			  },
			},
			{ new: true }
		  ).exec();
		  await UserModel.findByIdAndUpdate(followerId, {
			$pull: { following: followedId },
		  }).exec();
        res.json(followedUser)
    } catch (e){
        res.status(500).json(e.message)
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