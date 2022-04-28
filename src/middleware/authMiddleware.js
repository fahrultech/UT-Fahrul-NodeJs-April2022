const jwt = require('jsonwebtoken')
const User = require('../service/user.service')

exports.protect = async(req, res, next) => {
    try {
        let token
        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ){
            try {
                token = req.headers.authorization.split(' ')[1]

                const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY)
                //console.log(decoded)

                const user  = new User

                req.user = user.findById(decoded.id)

                console.log(req.user)

                next()
            } catch (error) {
                console.log(error)
                res.status(401).json({"msg":"Not authorized, token failed"})
            }
        }
        if(!token){
            res.status(401).json({"msg":"Not authorized"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({"msg":"Internal server error"})
    }
}

exports.admin = (req, res) => {
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401).json({"msg":"Not authorized as an admin"})
    }
}