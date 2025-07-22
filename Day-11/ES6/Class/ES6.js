// Object Destructuring
let obj = {
    "name" : "Raju",
    "age" : 26,
    "salary" : 50001.56,
    "company" : "ABCD",
    "unit" : "STG",
    "empId" : 1106121
}

let { salary, company } = obj
console.log(salary, company)

let obj1 = {
    salary, company
}
console.log(obj1)


let newArr1 = [1, 2, 3, 4, 5, 6]
let newArr2 = [10, 20, newArr1]
console.log(newArr1)
console.log(newArr2)

// Spread Operator
// In Objects
let obj2 = {
    "lastName" : "Ram",
    ...obj
}
console.log(obj2)

// In Arrays
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, ...arr1]
console.log(arr1)
console.log(arr2)

// In Functions with parameters
function greet(para1, ...para2) {
    console.log(para1)
    console.log(para2)
}

greet(1, 2, 3, 4, 5, 6, 7)

// Module
// 2 Exports -> Default [1] -> Using export [multiple]

export function add(num1, num2) {
    return num1 + num2
}

export function power(base, exp) {
    let power = 1;
    for (let i = 0; i < exp; i += 1)
        power *= base;
    return power
}


// export default function power(base, exp) {
//     let power = 1;
//     for (let i = 0; i < exp; i += 1)
//         power *= base;
//     return power
// }

