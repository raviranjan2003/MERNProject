const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : [true, "Please enter a valid email"]
    },
    phone : {
        type : Number
    },
    password : {
        type : String,
        require : [true, "Please enter a secure password"]
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;