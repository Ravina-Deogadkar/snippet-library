const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const mongoURI = process.env.MONGO_URL;

const connectToMongo = async() => {
    await mongoose.connect(mongoURI, { dbName: 'snappit' });
    console.log("Connected To Mongo Successfully!!");
    
}


module.exports = connectToMongo;