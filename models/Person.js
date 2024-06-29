var mongoose = require('mongoose')

var PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    phone: {
        type: String,
        unique: true
    },
    role: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
})


var personModel = new mongoose.model('Person', PersonSchema)


module.exports = personModel