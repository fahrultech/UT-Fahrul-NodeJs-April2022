const expres = require('express');

const userRoutes = require('./user/user.routes');
const messageRoutes = require('./message/message.routes');
const adminRoutes = require('./admin/admin.routes')

const api = expres.Router()

api.use('/user', userRoutes);
api.use('/admin', adminRoutes);
api.use('/message', messageRoutes);

module.exports = api