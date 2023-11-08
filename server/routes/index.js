const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).send("Welcome to home route !");
})

router.use('/api', require("./api"))

module.exports = router;