const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    image :{
        type: String,
        required : true
    },

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

const StudentModel = mongoose.model('student', studentSchema)

module.exports = StudentModel;