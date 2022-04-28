const express = require('express')
const { getCustomerMessage, getAdminMessage } = require('./message.controller')
const router = express.Router()
const { protect, customer, admin } = require('../../middleware/authMiddleware')


router.route('/customer').get(protect,customer,getCustomerMessage)
router.route('/admin').get(protect,admin,getAdminMessage)

module.exports = router