const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

userSchema.pre('save',async function(next){
    // console.log("this constructor  " ,this);

    const user = this;
    if(!user.isModified('password')){
        next();
    }
    try {
        const hashPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashPassword;
    } catch (error) {
        next(error);
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;