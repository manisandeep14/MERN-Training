const express = require('express')
const cors = require('cors')
const router = express.Router()
const StudentModel = require('./student')

router.use(cors())

// Create student
router.post('/createStudent', async (req, res) => {
    try {
        const body = req.body;
        const userData = new StudentModel(body);
        const response = await userData.save();
        res.status(200).json({ message: 'Student Record Created successfully!', data: response });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all students
router.get('/getStudents', async (req, res) => {
    try {
        const response = await StudentModel.find();
        res.status(200).json({ students: response });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update student based on rollNo
router.put('/updateStudent/:rollNo', async (req, res) => {
    try {
        const rollNo = req.params.rollNo;
        const updatedData = req.body;

        const response = await StudentModel.findOneAndUpdate(
            { rollNo: rollNo },
            updatedData,
            { new: true } // to return the updated document
        );

        if (!response) {
            return res.status(404).json({ message: `Student with rollNo ${rollNo} not found.` });
        }

        res.status(200).json({ message: 'Student Record Updated successfully!', data: response });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete student based on rollNo
router.delete('/deleteStudent/:rollNo', async (req, res) => {
    try {
        const rollNo = req.params.rollNo;

        const response = await StudentModel.findOneAndDelete({ rollNo: rollNo });

        if (!response) {
            return res.status(404).json({ message: `Student with rollNo ${rollNo} not found.` });
        }

        res.status(200).json({ message: 'Student Record Deleted successfully!', data: response });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
