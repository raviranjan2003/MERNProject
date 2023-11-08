const express = require('express');
const router = express.Router();

router
.get('/register', (req,res) => {
    res.status(200).send("Welcome to registration page ! --> GET");
})
.post('/register', (req,res) => {
    res.status(200).send("Welcome to registration page ! --> POST");
})

router
.get('/login', (req,res) => {
    res.status(200).send("Welcome to login page ! --> GET");
})
.post('/login', (req,res) => {
    res.status(200).send("Welcome to login page ! --> POST");
})

module.exports = router;