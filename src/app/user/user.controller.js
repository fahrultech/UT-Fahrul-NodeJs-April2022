const generateToken = require('../../utils/generateToken')
const User = require('../../models/user')

// @dec     Auth user & get token
// @route   POST /api/users/login
// @access  Public

exports.authUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        } else {
            return res.status(401).json({"msg":"Invalid email or password"})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ "msg": "Internal server error" })
    }
}

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

exports.registerUser = async (req, res) => {
    try {
        const { name, password, email } = req.body

        const userExists = await User.findOne({ email })

        if(userExists){
            return res.status(400).json({"msg":"User already exists"})
        }

        const user = await User.create(req.body)

        if(user){
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email : user.email,
                isAdmin : user.isAdmin,
                token : generateToken(user._id)
            })
        }else{
            return res.status(400).json({"msg":"Invalid user data"})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({"msg":"Internal server error"})
    }
}