const users = require("../../controllers/users");
const {Router} = require("express");

const userRouter = Router();

userRouter.get('', users.getAllUsers);
userRouter.get('/:id', users.getUserById);
userRouter.post('', users.UserRegistration);
userRouter.put('', users.UserProfileEdit);

module.exports = userRouter;