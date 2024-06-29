var express = require('express')
var router = express.Router()
var person = require('../models/Person')


router.get('/getperson', async (req, res)=>{
    try {
        var data = await person.find()
        res.status(200).json({response: data})
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
})


router.post('/setperson', async (req, res)=>{
    try {
        var data = req.body;
        var newPerson = new person(data)
        var response1 = await newPerson.save()
        res.status(200).json({response: response1})
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.put('/updateperson/:id', async (req, res)=>{
    try {
        var id = req.params.id;
        var body = req.body;
        var response = await person.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({result: response})
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
})


module.exports = router