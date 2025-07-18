//Creating a button

let button = document.querySelector('.batan');
button.style.padding = "10px 20px";
// button.style.backgroundColor = 'lightpink';
button.style.border = '2px solid lightblue';
button.style.borderRadius = '10px';
button.style.display = "block";
button.style.margin = "0 auto";

//Adding a class to interact with css and html elements
button.classList.add('batan1')

button.addEventListener('mousedown', ()=>{
  button.textContent = 'Entered!!!';
});

button.addEventListener('mouseup', ()=>{
  button.textContent = 'Enter';
});

button.addEventListener('mouseleave', ()=>{
  button.textContent = 'Enter';
});



let userInp = document.querySelector('.textInp');

let userEnter = document.querySelector('#entry');
console.log(userEnter);
let message = document.querySelector('.result');

userEnter.addEventListener('click', () => {
  let number = parseInt(userInp.value);
  console.log(number);

  if(number< 2){
    message.textContent = 'Not Prime!!!'
    return;
  }

  for(let i = 2; i*i <= number; i+=1){
    if(number%i == 0){
      message.textContent = 'Not Prime!!!'
      return;
    }
  }
  // if(!isNaN(number)){
  //   message.textContent = 'Prime'
  // }

  if(isNaN(number)){
    message.textContent = 'Enter a Number';
  }
  else{
    message.textContent = 'Prime'
  }
  userInp.value = '';
});








