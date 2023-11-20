const User = require("../models/userModels");
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
    try {
        // console.log(req.body);
        const { userName, email, phone, password } = req.body;
        if (!email || !password) {
            return res.send("Please fill the email and password !");
        }
        const userExist = await User.findOne({ email: email });
        // console.log(userExist);
        if (userExist) {
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
        const jwtToken = await newUser.getToken();
        newUser.save()
            .then((response) => {
                // console.log("Response===>",response);
                res.status(201).send({
                    message: "Registration successful",
                    jwtToken,
                    userId: newUser._id.toString()
                })
            })
            .catch(err => {
                console.log("error===>", err);
                res.status(400).send(err.message);
            })
    } catch (error) {
        console.log("error ==> ", error);
        res.status(500).send("Internal Server Error !");
    }
}
const signIn = async (req, res) => {
    // res.status(200).send("Welcome to login page ! --> POST");
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.send("Credentials not matched !");
        }
        const passwordCorrect = await user.comparePassword(password);
        if (passwordCorrect) {
            res.status(201).send({ 
                message : "User logged in successfully",
                token : await user.getToken(),
                userId : user._id.toString() 
            });
        }else{
            res.status(401).send({message: "Credentials not matched !"});
        }
    } catch (error) {
        res.status(500).send("Internal Server Error !");
    }
}

module.exports = { signUp, signIn };
