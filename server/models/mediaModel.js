const mongoose = require("mongoose");

const mediaSchema = mongoose.Schema({
    title: {type: String, required: true},
    type: {type: String, required: true},
    file: {type: String, required: true},
},{
    versionKey: false
})

const MediaModel = mongoose.model("media", mediaSchema)

module.exports = {
    MediaModel
}