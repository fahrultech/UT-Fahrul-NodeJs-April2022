const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const {
    register,
    auth
} = require('../user.controller')

const isAdmin = 1;

router.route('/register').post(
    [
        check("name", "Enter your user name").not().isEmpty(),
        check("email", "Enter your email").not().isEmpty(),
        check("password", "Enter your password").not().isEmpty()
    ],
    register)
router.route('/login').post(
    [
        check("email", "Enter your email").not().isEmpty(),
        check("password", "Enter your password").not().isEmpty()
    ],
    auth)

module.exports = router