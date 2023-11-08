const express = require('express');
const app = express();

const { log } = require('ravi-first');

// app.get('/', (req,res) => {
//     res.status(200).send("Welcome to new Project !");
// })

app.use('/', require("./routes"))



const PORT = 3000;
app.listen(PORT, ()=>{
    log(`Server is running at PORT : ${PORT}`);
})