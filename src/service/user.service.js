const db = require('./db')
const bcrypt = require('bcryptjs')


class userService {
   
    createUser = async (user) => {
        const { name, email, password } = user;
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const isAdmin = 0;
        const result = db.insert('INSERT INTO user (name, email, password, isAdmin) values(?, ?, ?, ?) returning *', [name, email, hashPassword, isAdmin]);

        let message = 'Erro create new User'
        if(result.changes){
            
            message = db.query("select * from user where email = ?", email)
        }
        return message[0]
    }
    findOne = async (param) => {
        const data = db.query(`SELECT * FROM user WHERE email = ?`, [param])
        return {
            data
        }
    }
    findById = async(param) => {
        const data = db.query('SELECT * FROM user WHERE id = ?', [param])
        return {data}
    }
}

module.exports = userService
