const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoURI= 'mongodb://localhost:27017'
// const express= require("express");
//const DB = 'mongodb://localhost:27017/?readPreference=primary&directConnection=true'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports = connectToMongo;
// const connectToMongo = ()=>{
// mongoose.connect(DB).then(() =>{
//     console.log('connection succesfull');
// }).catch((err) => console.log('no connection'));}