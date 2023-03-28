const {Router} = require("express");
const openai = require("../../controllers/openai");
const authGuard = require("../../middleware/authGuards");
const openaiRouter = Router();

openaiRouter.post('/openai/chatGpt',authGuard, openai.chatGpt)
openaiRouter.post('/openai/imageEdits',authGuard, openai.imageEdits)

module.exports = openaiRouter;