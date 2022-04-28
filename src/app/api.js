const expres = require('express')

const userRoutes = require('./user/user.routes')
const messageRoutes = require('./message/message.routes')

const api = expres.Router()

api.use('/user', userRoutes)
api.use('/message', messageRoutes)

module.exports = api