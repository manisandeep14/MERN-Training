const http  = require('http')
const server = http.createServer((req,res) =>{
  console.log(req.url)
  console.log(req.body)
  console.log(req.method)
  console.log('<h1>Home Page</h1>')
  res.end()
})

server.listen(5000)
console.log("sever started  running on port 5000!!!")