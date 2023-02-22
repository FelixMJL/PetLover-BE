const {Router} = require('express');
const authGuard = require("../../middleware/authGuards");
const replyValidation = require("../../validators/replyValidation");
const replies = require("../../controllers/replies");

const replyRouter = Router();

replyRouter.post('/replies', authGuard, replyValidation.store, replies.store);
replyRouter.get('/replies/:id', authGuard, replies.show);

module.exports = replyRouter;