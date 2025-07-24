const express = require('express')
const app = express()

// parse the json
app.use(express.json())
app.use('./routers')

//read the data and fetch the data

app.get('/', (req, res) =>{
  res.send("Welcome to NODE JS and Express JS")
  console.log(res.url)
  console.log(res.body)
})

// 
app.post('/', (req, res) =>{
  res.send("POST METHOD!!")
  console.log(req.url)
  console.log(req.body)
})

app.listen(5000, ()=>{
  console.log("Server running on htpp://localhost:5000")
})