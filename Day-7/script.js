let obj = {
  name: "mani",
  id : 110749304,
  company : "codenow"
}

console.log(Object.keys(obj))
console.log(Object.values(obj))


let values = Object.values(obj) //['mani', 110749304, 'codenow']
values.forEach(element => {
  console.log(element)
});

Object.keys(obj) // ['name', 'id', 'company']
let keys = Object.keys(obj)
keys.forEach(key => console.log(key))


// String To Object ===>>> JSON.Parse

let str =  '{"name": "Sandeep", "id": 1106121, "company": "CodeNow"}';
obj = JSON.parse(str);
console.log(obj)
console.log(obj.name);


// OBJECT To String JSON.Stringify

obj = {name: 'Sandeep', id: 1106121, company: 'CodeNow'}
str = JSON.stringify(obj)
console.log(str)


// DOM FUNCTIONALITIES - Modifies the content of HTML and CSS by accessing them

let pEle = document.getElementById("id1")
pEle.style.backgroundColor = "blue"


let hEle = document.querySelector("h1")
hEle.style.color = 'lightPink'


let heading = document.querySelector('.circle')
heading.style.backgroundColor = "black"
