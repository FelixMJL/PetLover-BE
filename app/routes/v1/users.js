const users = require("../../controllers/users");
const {Router} = require("express");
const userRouter = Router();
const authGuard = require("../../middleware/authGuards");

userRouter.post('/register', users.UserRegistration);
userRouter.use(authGuard)
userRouter.get('', users.getAllUsers);
userRouter.get('/:id', users.getUserById);
userRouter.put('/:id', users.UserProfileEdit);

module.exports = userRouter;