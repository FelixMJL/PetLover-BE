const express = require('express')
const cors = require('cors')
// const apiRouter = require('../app/routes/v1/api')
const v1Router = require('../app/routes')
const config = require('../app/config')
const connectToDB = require("../app/utils/db");

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
    app.use(config.api.prefix, v1Router);
    return app;
}