const store = require("../config/DDBB/index")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const { model, id } = req.params
    console.log(id)
    const result = await store[model].ById(id)
    response(res, 200, result)
}