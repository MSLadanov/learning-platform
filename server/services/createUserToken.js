const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

function createUserToken(user){
    const payload = {
        id: user.id
    }
    return jwt.sign(payload, dotenv.parsed.SECRET_KEY, { expiresIn: '1h'} )
}

module.exports = {
    createUserToken
}