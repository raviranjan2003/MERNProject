const express = require('express');
const app = express();
const connectDb = require('./utils/db');

const { log } = require('ravi-first');

app.use(express.json());

app.use('/', require("./routes"))



const PORT = 3000;
connectDb().then(()=>{
    app.listen(PORT, ()=>{
        log(`Server is running at PORT : ${PORT}`);
    })
})