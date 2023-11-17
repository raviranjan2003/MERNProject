const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

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

//! generating JWT using mongoose instance method
userSchema.methods.getToken = async function (){
    try {
        const payload = {
            userId : this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin
        }
        const secretKey = process.env.SECRET_KEY;
        const expiry = process.env.EXPIRATION_TIME;
        const token = jwt.sign(payload,secretKey,{expiresIn : expiry});
        return token;
    } catch (error) {
        console.log(error)
    }
} 

const User = mongoose.model("User", userSchema);

module.exports = User;