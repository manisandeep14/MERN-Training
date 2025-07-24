const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.body)
    console.log(req.method)
    switch (req.url) {
        case '/' : res.write('<h1>Home Page Hello World !</h1>')
                    break;
        case '/contact' : res.write('<h1>Contact Page</h1>')
                    break;
        case '/about' : res.write('<h1>About Page</h1>')
                    break;
                    
    }
    res.end()
})
server.listen(5000)
console.log("Server started running on port 5000 !!!")