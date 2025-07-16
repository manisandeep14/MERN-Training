// console.log("HELLO WORLD!!!")
// alert("HELLO, WELCOME TO JAVA SCRIPT")

// let name = "ManiSandeep"
// console.log(name)

// let num = 56
// console.log(num)
// let char = null;
// let pi;
// let salary = 10000000.00
// console.log(pi)
// console.log(salary)



// Fibonnaci Numbers
// let number = prompt("Enter the Number:")
// let val1 = 0;
// let val2 = 1, vale3;
// let result ;
// console.log(val1)
// console.log(val2)
// for(let i = 0; i < number; i+=1){
//   val3 = val1 + val2
//   val1 = val2
//   val2 = val2
//   result = console.log(val3)
// }


//ArmStron Number;

//This is High order function
function count(number){
  let count = 0;
  while(number> 0){
    number = Math.floor(number/10)
    count +=1
  }
  return count
}
// // count(123)

function ArmsNum(number){
  let len = count(number);  //also we can know the length from the number by converting it in to string and checking it length like number.toString().length;
  console.log(len)
  let result = 0;
  let temp = number;
  for(let i = 0; i < len; i+=1){
    result += (number%10)**len
    number = Math.floor(number/10);
  }
  if(result == temp){
    console.log("Armstrong Number")
  }
  else{
    console.log("Not a Armstrong Number")
  }
}
  
// let number = prompt("Entert the Number")
let number = 153
ArmsNum(number)


let add = addition = num => num+5
console.log(add(5)) // This is called arrow function.

let result = addy = (num1,num2) => num3 = num1+num2

// It can be written like this also

console.log(addy(20,30))

  
let armstrong = num =>{
  length_num = count(num)
  let tempo = num
  let value = 0
  for(let i = 0; i < length_num; i+=1){
    value += (num%10)**length_num
    num = Math.floor(num/10)
  }
  if(tempo == value){
    return "armstrongNum"
  }
  return "not an armstronNum"
}

console.log(armstrong(153))

  
  
//Prime Number;

let prime = data =>{
  if(data < 2 )
    return false
  for(let i =2; i*i <= data; i+=1 ){
    if(data % i == 0)
      return false
  } ` `
  return true
}

if(prime(2))
  console.log("Prime")
else
  console.log("Not Prime")


//print Prime in a range
let num_1 = 7
for(let i = 2; i <= num_1; i++){
  if(prime(i))
    console.log(i)
}



