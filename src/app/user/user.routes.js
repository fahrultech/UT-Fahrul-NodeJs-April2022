const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const {
  registerUser,
  authUser
} = require('./user.controller')

router.route('/register').post(registerUser)
router.route('/login').post(authUser)

module.exports = router