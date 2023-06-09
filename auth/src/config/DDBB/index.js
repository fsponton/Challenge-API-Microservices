const axios = require("axios")

module.exports = {
    register: async (form) => {
        return await axios({
            method: "post",
            url: "http://database:8010/user/register",
            data: form,
        })
    },
    login: async (form) => {
        return await axios({
            method: "post",
            url: "http://database:8010/user/login",
            data: form,
        })
    }
}


