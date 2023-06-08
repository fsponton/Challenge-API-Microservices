const jwt = require("jsonwebtoken")
const { PASSWORD_SIGN } = require("../config/enviroments")

//Middleware - Verify token 
module.exports = (req, res, next) => {
    const authorization = req.get('Authorization')
    let token = ''

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    } else { return res.status(401).send({ error: "true", message: "Invalid authorization" }) }

    const decodedToken = jwt.verify(token, `${PASSWORD_SIGN}`)

    if (!token || !decodedToken) {
        return res.status(401).json({ error: "true", message: 'Token missing or invalid' })
    }

    next()
}