const dotenv = require('dotenv')
dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

module.exports = {
    port: process.env.PORT || 3000,
    api: {
        prefix: process.env.API_PREFIX || '/api/v1'
    }
}