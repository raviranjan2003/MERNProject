const express = require('express');
const router = express.Router();
const authControllers = require('../../controllers/auth-controller');
const signUpSchema = require('../../validators/authValidator')
const validate = require('../../middlewares/validateMiddleware')

router
.get('/register', (req,res) => {
    res.status(200).send("Welcome to registration page ! --> GET");
})
.post('/register',validate(signUpSchema), authControllers.signUp );

router
.get('/login', (req,res) => {
    res.status(200).send("Welcome to login page ! --> GET");
})
.post('/login', authControllers.signIn );

module.exports = router;