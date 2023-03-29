const mongoose = require("mongoose")


//USER

const UserSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    profilePic: {
        type: String,
        default: ""
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("User",UserSchema);