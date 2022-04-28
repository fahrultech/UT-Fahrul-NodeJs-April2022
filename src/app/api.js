const expres = require('express');

const customerRoutes = require('./user/customer/customer.routes');
const messageRoutes = require('./message/message.routes');
const adminRoutes = require('./user/admin/admin.routes')

const api = expres.Router()

api.use('/customer', customerRoutes);
api.use('/admin', adminRoutes);
api.use('/message', messageRoutes);

module.exports = api