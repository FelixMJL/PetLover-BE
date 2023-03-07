const express = require('express')
require("express-async-errors");
const cors = require('cors')
const config = require('../app/config')
const connectToDB = require("../app/utils/db");
const errorHandler = require("../app/middleware/errorHandler")
const commentRouter = require("../app/routes/v1/comments");
const userRouter = require("../app/routes/v1/users");
const postRouter = require("../app/routes/v1/posts");
const replyRouter = require("../app/routes/v1/replies");
const healthCheckRouter = require("../app/routes/v1/healthCheck");
const authTokenRouter = require("../app/routes/v1/authToken");


const startServer = () => {
    const application = express();

    application.listen(config.port, err => {
        if (err) {
            console.log(err)
            process.exit(1)
        }
        console.log("SERVER STARTED")
    })

    connectToDB();

    return application;
}

module.exports = () => {
    const app = startServer()
    app.use(cors())
    app.use(express.json())
    app.use(config.api.prefix, userRouter);
    app.use(config.api.prefix, commentRouter);
    app.use(config.api.prefix, postRouter);
    app.use(config.api.prefix, replyRouter);
    app.use(config.api.prefix, healthCheckRouter);
    app.use(config.api.prefix, authTokenRouter);
    app.use(errorHandler);

    return app;
}