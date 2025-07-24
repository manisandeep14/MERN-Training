const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    rollNo : {
        type : String,
        required : true,
        unique : true
    },
    marks : {
        type : Number,
        required : false
    }
})

const StudentModel = mongoose.model('admin', studentSchema)

module.exports = StudentModel;