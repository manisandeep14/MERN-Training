const express = require('express')
const router = express.Router()
const StudentModel = require('./student')

router.post('/createStudent', async(req, res) => {
    try {
        const body = req.body;
        const userData = new StudentModel(body);
        const response = await userData.save()
        res.status(200).json({message : 'Student Record Created successfully !', data : response})
    } catch (error) {
        res.status(400).json({message : error.message})  
    }
})

router.get('/getStudents', async(req, res) => {
    try {
        const response = await StudentModel.find()
        res.status(200).json({students : response})
    } catch (error) {
        res.status(400).json({message : error.message})  
    }
})


module.exports = router