var express = require('express')
var app = express()
var db = require('./db')
var personRoute = require('./routes/personRoutes')
var bodyparser = require('body-parser')


app.use(bodyparser.json())

app.use('/', personRoute)

app.get('/', (req, res)=>{
    res.send("Deployment Server Ready")
})

app.listen(3000, ()=>{
    console.log("Server Listening on Port 3000");
})