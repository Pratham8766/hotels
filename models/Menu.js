var mongoose = require('mongoose')

var menuschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    is_drink: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum:['sour', 'sweet', 'bitter'],
        required: true
    }
})

var MenuModel = mongoose.model('Menu', menuschema)

module.exports = MenuModel