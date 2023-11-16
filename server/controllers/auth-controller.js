const User = require("../models/userModels");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const signUp = async (req,res) => {
    try {
        // console.log(req.body);
        const { userName , email , phone , password } = req.body;
        if(!email || !password){
            return res.send("Please fill the email and password !");
        }
        const userExist = await User.findOne({ email : email });
        // console.log(userExist);
        if(userExist){
            return res.send("User already exist !");
        }

        //! We can also hash the password using pre method of mongoose 
        //! in userModels.js file
        // bcrypt.hash(password, saltRounds, (err, hash)=>{
        //     if(!err){
        //        const newUser = new User({
        //             userName,
        //             email,
        //             phone,
        //             password : hash
        //         })
        //         newUser.save()
        //         .then((response)=>{
        //             console.log("Response===>",response);
        //             res.status(200).send({newUser : response})
        //         })
        //         .catch(err => {
        //             console.log("error===>",err);
        //             res.status(400).send(err.message);
        //         })
        //     }else{ 
        //        return console.log("Error in bcrypt hashing ", err);  
        //     }
        // })
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
            res.status(400).send(err.message);
        })
    } catch (error) {
        console.log("error ==> ", error);
        res.status(500).send("Internal Server Error !");
    }
}
const signIn = async (req,res) => {
    // res.status(200).send("Welcome to login page ! --> POST");
    const { email , password } = req.body;
    const user = await User.findOne({ email });
    if(!user){
        return res.send("User not exist, Kindly signUp !");
    }
    bcrypt.compare(password, user.password, (err,result)=>{
        if(!err){
            res.send({ result });
        }
    })
}

module.exports = { signUp , signIn };
