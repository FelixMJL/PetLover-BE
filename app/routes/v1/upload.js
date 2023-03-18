const {Router} = require("express");
const uploadFile = require("../../controllers/uploadFile");
const {memoryStorage} = require("multer");
const multer = require("multer");
const uploadRouter = Router();

const storage = memoryStorage();
const upload = multer({
	storage
})

uploadRouter.post('/upload', upload.single('file'), uploadFile.upload)

module.exports = uploadRouter;