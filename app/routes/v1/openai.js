const {Router} = require("express");
const openai = require("../../controllers/openai");
const authGuard = require("../../middleware/authGuards");
const openaiRouter = Router();

openaiRouter.post('/openai/chatGpt',authGuard, openai.chatGpt)

module.exports = openaiRouter;