const {Router} = require('express');
const healthCheck = require('../../controllers/healthCheck')

const healthCheckRouter = Router();

healthCheckRouter.get('/health_check',healthCheck.check)

module.exports =healthCheckRouter;