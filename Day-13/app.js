const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes')

const app = express()

app.use(express.json())
app.use('/', router)

mongoose.connect('mongodb://localhost:27017/studentdb')
    .then(() => console.log("Connection Established Successfully"))
    .catch(() => console.log("Connection Failed"))

app.listen(8000, () => {
    console.log("Server is running on PORT : 8000 !")
})