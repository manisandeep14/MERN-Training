const fs = require('fs');

// fs.writeFile('./file1.txt', "Hello World ! How are you ?", (err, data) => {
//     console.log(err)
//     console.log(data)
// })

// fs.appendFile('./file1.txt', "I am doing good !!", (err, data) => {
//     console.log(err)
//     console.log(data)
// })

fs.readFile('./file2.txt', 'utf-8', (err, data) => {
    console.log(err.message)
    console.log(err.name)
    console.log(data)
})


console.log("Writing Completed")