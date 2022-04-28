const generateToken = require('../../utils/generateToken')
const User = require('../../service/user.service')


// @dec     Auth user & get token
// @route   POST /api/users/login
// @access  Public

exports.authAdmin = async (req, res) => {
    try {
        const { email } = req.body;

        const user = new User;

        const signinAdmin = await user.authUser(req.body)

        if (signinAdmin.length === 1) {
            res.json({
                _id: signinAdmin[0].id,
                name: signinAdmin[0].name,
                email: signinAdmin[0].email,
                isAdmin: signinAdmin[0].isAdmin,
                token: generateToken(signinAdmin[0].id)
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

exports.registerAdmin = async (req, res) => {
    try {
        const { name, password, email } = req.body
        
        req.body.isAdmin = 1;
        
        const user = new User()
        
        const userExists = await user.findOne(email)

        if(userExists.data.length > 0){
            return res.status(400).json({"msg":"User already exists"})
        }
        
        const newUser = await user.createUser(req.body)
        return res.status(200).json({
            _id : newUser.id,
            name : newUser.name,
            email : newUser.email,
            isAdmin : newUser.isAdmin,
            token : generateToken(newUser.id)
        });
       
    } catch (error) {
        console.log(error)
        return res.status(500).json({"msg":"Internal server error"})
    }
}