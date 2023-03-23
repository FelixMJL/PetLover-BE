const users = require("../../controllers/users");
const {Router} = require("express");
const authGuard = require("../../middleware/authGuards");
const userValidation = require("../../validators/userValidation")
const userRouter = Router();

userRouter.post('/users', userValidation.register,users.register);
userRouter.post('/users/login', userValidation.login,users.login);
userRouter.get('/users', authGuard, users.index);
userRouter.get('/users/:id', authGuard, users.show);
userRouter.put('/users/:id', authGuard,users.update);
userRouter.post('/users/:currentUserId/following/:targetUserId', authGuard, users.followAUser);
userRouter.delete('/users/:currentUserId/unfollowing/:targetUserId', authGuard, users.unfollowAUser);
userRouter.get('/users/:id/following', authGuard, users.getAllFollowingsOfAUser)
userRouter.get('/users/:id/follower', authGuard, users.getAllFollowersOfAUser)

module.exports = userRouter;