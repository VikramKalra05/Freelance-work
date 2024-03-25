const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}, 
    verified: {type: Boolean, default: false},
},{
    versionKey: false
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {
    UserModel
}