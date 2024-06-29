var mongoose = require('mongoose')
var dotenv = require('dotenv')
dotenv.config()

mongoURL = process.env.mongoURL

mongoose.connect(mongoURL)

var db = mongoose.connection


db.on('connected', ()=>{
    console.log("Connected to the Database");
})
db.on('disconnected', ()=>{
    console.log("Disconnectd");
})
db.on('error', ()=>{
    console.log("Error");
})



module.exports = db;