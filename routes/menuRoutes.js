var express = require('express')
var router = express.Router()
var menu = require('../models/Menu')

router.post('/setmenu', async (req, res)=>{
    try {
        var data = req.body;
        var newMenuItem = new menu(data);
        var response = await newMenuItem.save()
        res.status(200).json({data: response}) 
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
})


router.get('/getmenu', async (req, res)=>{
    try{
        var response = await menu.find()
        res.status(200).json({data: response})
    }
    catch(error){
        res.status(500).json({error: "Internal Server Error"})
    }
})



router.put('/updatemenu/:id', async (req, res)=>{
    try {
        var menuID = req.params.id;
        var data = req.body;
        var response = await menu.findByIdAndUpdate(menuID, data, {
            new: true,
            runValidators: true
        })
        res.status(200).json({d: response})
    } catch (error) {
        res.status(500).json({error: "Internal Server Error. Cannot Update Data"})
    }
})



router.delete('/deletemenu/:id', async (req, res)=>{
    try {
        var id = req.params.id;
        var response = await menu.findByIdAndDelete(id)
        res.status(200).json({d: response})
    } catch (error) {
        res.status(500).json({error: "Internal Server Error. Cannot Delete data"})
    }
})

module.exports = router