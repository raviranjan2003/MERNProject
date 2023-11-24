const express = require('express');
const app = express();
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/errorMiddleware');

const { log } = require('ravi-first');

app.use(express.json());

app.use('/', require("./routes"))
app.use(errorMiddleware);



const PORT = 3000;
connectDb().then(()=>{
    app.listen(PORT, ()=>{
        log(`Server is running at PORT : ${PORT}`);
    })
})