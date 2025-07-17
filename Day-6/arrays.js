//Arrays:
//Arrah Declaration & Initialization

let arr1 = [10, 20, 30 , 40, 50]
console.log(arr1)

let arr2 = new Array(1, 2, 3, 4);
console.log(arr2)

//Accessing the elements
console.log(arr1[2]) //30
console.log(arr2[3]) //4

let arr = [10 ,20, 30 , 40, 50]
arr1[1] = 100
console.log(arr) //10 100 20 30 40 50 

//push
// adding the element at last
arr.push(60)
console.log(arr)
arr.push(100)
console.log(arr)

//pop
//removing the element at last
arr.pop() // arr =  [10, 20, 30 , 40, 50, 60]
console.log(arr)
arr.pop() // arr =  [10, 20, 30,40, 50]
console.log(arr)

//Shift -> Removes the element from first 
arr.shift() //arr = [20, 30 , 40, 50]
console.log(arr)
arr.shift() //arr = [ 30 , 40, 50]
console.log(arr)

//Unshift -> Add the element at first
arr.unshift(20) //arr = [20, 30 , 40, 50]
console.log(arr)
arr.unshift(10) //arr = [10 ,20, 30 , 40, 50]
console.log(arr)

//Splice -> Removes the elements from start with specifieed count

// arr.splice(start, count)
arr.splice(1, 2) //arr = [10 ,40,50] - removes 20, 30 as start is index 1 and count is 2
console.log(arr)

//Note All The Above Functions will also modify the above existing arrray elements

// IndexOf - returns the index of the element if present else - 1

arr.indexOf(20) //1
console.log(arr.indexOf(40))
arr.indexOf(100) //-1
console.log(arr)

//includes -> Returns true if element present else false
arr.includes(10)//true
console.log(arr.includes(10))
arr.includes(100)//false
console.log(arr)

// concat -> addd the elements into the array

arr =  [10 ,20, 30 , 40, 50]
arr.concat([60, 70, 80, 90, 100])// --> new array
console.log(arr)
// arr --> is not modified -> [10, 20, 30, 40, 50]
let newArr = arr.concat([60, 70, 80, 90, 100])
console.log(newArr)



//map -> It accepts a callback
    //-> for every element, callback is executed
    //-> returns an array
arr.map((ele) => console.log(ele)); 

//output : 10 20 30 40 50 60 70 80 90 100
//returrned value : undefined ....10 times
let squares = arr.map((ele) => ele * ele)
console.log(squares)
//100 400 900 1600 2500

//filter -> It accepts a callback
        //-> for every element, callback is executed
        //-> returns an array of elements whose condition is satisfied
let filteredArr = arr.filter((ele) => ele > 25)
console.log(filteredArr)

//returns undefined
arr = [10, 20, 30, 40, 50];
result = arr.map((ele) => {
  console.log(ele);
  // return ele
});
console.log(result);