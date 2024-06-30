var express = require('express')
var app = express()
var db = require('./db')
var personRoute = require('./routes/personRoutes')
var menuRoute = require('./routes/menuRoutes')
var bodyparser = require('body-parser')
var dotenv = require('dotenv')
dotenv.config()
var PORT = process.env.PORT || 3000;
app.use(bodyparser.json())



app.use('/', personRoute)
app.use('/', menuRoute)


app.listen(PORT, ()=>{
    console.log("Server Listening on Port 3000");
})