const express = require('express')
const { getMessage } = require('./message.controller')
const router = express.Router()
const { protect, admin } = require('../../middleware/authMiddleware')


router.route('/').get(protect,getMessage)

module.exports = router