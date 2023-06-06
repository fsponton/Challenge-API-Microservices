const { Schema } = require("mongoose")

const movieSchema = Schema({
    _id: String,
    title: {
        type: String,
        required: true,
        lowercase: true,
    },
    release: { type: String, required: true },
    popularity: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    language: [{
        type: String,
        required: true,
        lowercase: true,
    }],
    id_actors: {
        type: [String],
        required: true,
        ref: "Actor",
        validate: {
            validator: (arr) => { return arr.length > 0 },
            message: "Es necesario enviar al menos 1 id en array de id_actors",
        },
        minLength: [1, "El campo al menos tiene que tener 1 id"]
    },
    id_director: { type: String, ref: "Director", required: true },
    genres: [{
        type: String,
        enum: ['Comedy', 'Drama', 'Crime', 'Action', 'Sci-Fi', 'Horror', 'Suspence', 'Thriller', 'Adventure', 'Romance', 'Mistery', 'Fantasy']
    }]
})

movieSchema.statics.list = async function () {
    return await this.find()
        .populate("id_actors", ["id", "name"])
        .populate("id_director", ["id", "name"])
}

movieSchema.statics.ById = async function (id) {
    return await this.findById(id)
        .populate("id_actors", ["id", "name"])
        .populate("id_director", ["id", "name"])
}

movieSchema.statics.order = async function (attributes) {
    return await this.find().sort(attributes)
}

movieSchema.statics.insert = async function (form) {
    return await this.create(form)
}

module.exports = movieSchema;