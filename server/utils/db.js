const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        mongoose.connect(URI);
        console.log("DB connected successfully !");
    } catch (error) {
        console.log("Db connection error => ", error);
    }
}

module.exports = connectDb;