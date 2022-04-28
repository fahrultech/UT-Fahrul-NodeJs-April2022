const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const {
  registerAdmin,
  authAdmin
} = require('./admin.controller')

router.route('/register').post(registerAdmin)
router.route('/login').post(authAdmin)

module.exports = router