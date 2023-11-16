const { response } = require("express");
const User = require("../models/userModels");

const signUp = async (req,res) => {
    try {
        console.log(req.body);
        const { userName , email , phone , password } = req.body;
        if(!email || !password){
            return res.send("Please fill the email and password !");
        }
        const userExist = await User.findOne({ email : email });
        // console.log(userExist);
        if(userExist){
            return res.send("User already exist !");
        }
        const newUser = new User({
            userName,
            email,
            phone,
            password
        })
        newUser.save()
        .then((response)=>{
            console.log("Response===>",response);
            res.status(200).send({newUser : response})
        })
        .catch(err => {
            console.log("error===>",err);
            res.status(400).send(err);
        })
    } catch (error) {
        console.log("error ==> ", error);
        res.status(500).send("Internal Server Error !");
    }
}
const signIn = async (req,res) => {
    res.status(200).send("Welcome to login page ! --> POST");
}

module.exports = { signUp , signIn };
