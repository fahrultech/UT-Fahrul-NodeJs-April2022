const generateToken = require('../../utils/generateToken')
const User = require('../../service/user.service')
const { validationResult } = require('express-validator')
require('dotenv').config();

// @dec     Auth user & get token
// @route   POST /api/users/login
// @access  Public

exports.auth = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    try {
        const { email, password } = req.body

        const user = new User

        const signinUser = await user.authUser(req.body)

        if (signinUser.length === 1) {
            res.json({
                _id: signinUser[0].id,
                name: signinUser[0].name,
                email: signinUser[0].email,
                isAdmin: signinUser[0].isAdmin,
                token: generateToken(signinUser[0].id)
            });
        } else {
            return res.status(401).json({ "msg": "Invalid email or password" });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ "msg": "Internal server error" });
    }
}

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

exports.register = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    try {

        const { name, password, email } = req.body

        const user = new User

        const url = req.baseUrl.split("/")

        if (url[3] === 'admin') {
            req.body.isAdmin = 1;
        } else {
            req.body.isAdmin = 0;
        }

        if(!process.env.JWT_TOKEN_KEY || process.env.JWT_TOKEN_KEY === ''){

            return res.status(400).json({errors:{msg:"Please provide JWT_TOKEN_KEY in .env"}})
        }

        const userExists = await user.findOne(email)

        if (userExists.data.length > 0) {
            return res.status(400).json({ "errors": { "msg": "User already exists", "param": "email" } })
        }
        

        const newUser = await user.createUser(req.body);

        return res.status(200).json({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser.id)
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ "msg": "Internal server error" })
    }
}