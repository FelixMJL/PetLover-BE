const users = require("../../controllers/users");
const {Router} = require("express");
const userRouter = Router();
const authGuard = require("../../middleware/authGuards");

userRouter.post('', users.UserRegistration);
userRouter.post('/login', users.userLogin);
userRouter.use(authGuard)
userRouter.get('', users.getAllUsers);
userRouter.get('/:id', users.getUserById);
userRouter.put('/:id', users.UserProfileEdit);
userRouter.post('/:followedId/following/:followerId', users.followAUser);
userRouter.delete('/:followedId/following/:followerId', users.unfollowAUser);
userRouter.get('/:id/following', users.getAllFollowingsOfAUser)
userRouter.get('/:id/follower', users.getAllFollowersOfAUser)

module.exports = userRouter;