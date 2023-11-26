const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please input all the fields"]
    },
    email : {
        type : String,
        required : [true , "Please input all the fields"]
    },
    message : {
        type : String,
        required : [true, "Please input all the fields"]
    }
})

const Contact = mongoose.model("Contact",contactSchema);

module.exports = Contact;