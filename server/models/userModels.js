const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : [true, "Please enter a valid email"]
    },
    phone : {
        type : Number
    },
    password : {
        type : String,
        required : [true, "Please enter a secure password"]
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;