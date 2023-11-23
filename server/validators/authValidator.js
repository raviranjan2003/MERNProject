const { z } = require('zod');


// Creating object schema
const signUpSchema = z.object({
    userName : z
    .string({ required_error : "Username is required "})
    .trim()
    .min(3,{ message : "Name must be atleast 3 chars "})
    .max(255, { message : "Name should not be more than 255 chars "}),
    email : z
    .string({ required_error : "Email is required "})
    .trim()
    .min(3,{ message : "email must be atleast 3 chars "})
    .max(255, { message : "email should not be more than 255 chars "}),
    phone : z
    .string({ required_error : "Phone is requied "})
    .trim()
    .min(10,{ message : "phone must be atleast 10 digits "})
    .max(13, { message : "phone should not be more than 13 digits "}),
    password : z
    .string({ required_error : "Password field can't be empty "})
    .min(6,{ message : "password must be atleast 6 chars "})
    .max(255, { message : "password should not be more than 255 chars "}),
})

module.exports = signUpSchema;