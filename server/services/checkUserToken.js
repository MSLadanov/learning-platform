const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

function checkUserToken(token) {
    var decoded = jwt.verify(token, dotenv.parsed.SECRET_KEY );
    return +decoded.id
}

module.exports = { checkUserToken };
