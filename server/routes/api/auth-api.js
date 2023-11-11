const express = require('express');
const router = express.Router();
const authControllers = require('../../controllers/auth-controller');

router
.get('/register', (req,res) => {
    res.status(200).send("Welcome to registration page ! --> GET");
})
.post('/register', authControllers.signUp );

router
.get('/login', (req,res) => {
    res.status(200).send("Welcome to login page ! --> GET");
})
.post('/login', authControllers.signIn );

module.exports = router;