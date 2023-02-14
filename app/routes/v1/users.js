const express = require('express');
const users = require("../../controllers/users");
const {Router} = require("express");
// const router = new express.Router();

const userRouter = Router();

userRouter.get('', users.getAllUsers);


module.exports = userRouter;