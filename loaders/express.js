const express = require('express')
require("express-async-errors");
const cors = require('cors')
const config = require('../app/config')
const connectToDB = require("../app/utils/db");
const errorHandler = require("../app/middleware/errorHandler")
const commentRouter = require("../app/routes/v1/comments");
const userRouter = require("../app/routes/v1/users");
const postRouter = require("../app/routes/v1/posts");
const tokenErrorHandler = require("../app/middleware/tokenErrorHandler")

const startServer = () => {
    ////////////////////////////////
    // 1. init express
    // 2. listen to server
    // 3. return which can use later
    ////////////////////////////////
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
    ////////////////////////////////
    // 1. call the function above
    // 2. cors (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
    // 3. return which can use later
    // 4. change to json
    // 5. router
    ////////////////////////////////
    const app = startServer()
    app.use(cors())
    app.use(express.json())
    app.use(config.api.prefix, userRouter);
    app.use(config.api.prefix, commentRouter);
    app.use(config.api.prefix, postRouter);
    app.use(tokenErrorHandler);
    app.use(errorHandler);

    return app;
}