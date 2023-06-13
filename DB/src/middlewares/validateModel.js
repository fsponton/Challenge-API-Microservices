const { modelError } = require("../utils/errors")
const { ENTITIES } = require("../config/enviroments")

module.exports = (req, res, next) => {
    const { model } = req.params
    console.log("req", req.headers)
    if ((ENTITIES.includes(model))) {
        return next()
    } else {
        throw new modelError(`Invalid route, please check`, 404)
    }
}
