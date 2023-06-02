const { User } = require("../config/DDBB/index")
const { response } = require("../utils")
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")


module.exports = async (req, res) => {
    let { form } = req

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(form.password, salt)

    form.password = hash
    const _id = new mongoose.Types.ObjectId;

    const result = await User.create({ ...form, _id })
    response(res, 201, result)
}
