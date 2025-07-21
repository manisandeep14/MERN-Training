'use strict';

const form =  document.querySelector('#form');
const uname = document.querySelector('#username');
const Emailname = document.querySelector('#email')
const passKey = document.querySelector('#password1')
const passKey2 = document.querySelector('#password2')
const unameError = document.querySelector('.usernameerror')
const emailError = document.querySelector('.mailerror')
const passwordError = document.querySelector('.pass1error')
const passwordError1 = document.querySelector('.pass2error')
const InputBox = document.querySelectorAll('.input-control')
console.log(InputBox)

let regex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

let regex1 = /[A-Za-z0-9]+/i;

form.addEventListener('submit', (e) =>{
	e.preventDefault();
	//console.log(uname.value);
	usernameFun(uname);
	// console.log(regex.test(Emailname.value));
	userEmailFun(Emailname);

	userPasswordFun(passKey);
	//console.log(regex1.test(passKey.value));
	parallelCheck(passKey, passKey2);
});



function usernameFun(uname) {
if(uname.value === ''){
		unameError.textContent = "user name should not be empty!!!"
		unameError.classList.add('error')
		InputBox[0].classList.remove('success')
		InputBox[0].classList.add('error')
	}
	else if(uname.value.length < 8){
		unameError.textContent = "Atleast 8 letters"
		unameError.classList.add('error')
		InputBox[0].classList.remove('success')
		InputBox[0].classList.add('error')
	}
	else{
		unameError.textContent = "Valid name"
		unameError.classList.add('success')
		InputBox[0].classList.remove('error')
		InputBox[0].classList.add('success')
	}
}

function userEmailFun(Emailname){
	if(regex.test(Emailname.value)){
		emailError.textContent = "Valid Email"
		emailError.classList.add('success')
		InputBox[1].classList.remove('error')
		InputBox[1].classList.add('success')
	}
	else{
		emailError.textContent = "Invalid Email"
		emailError.classList.add('error')
		InputBox[1].classList.remove('success')
		InputBox[1].classList.add('error')
	}
	
}
let isPasskey = false;
function userPasswordFun(passKey){
	if(regex1.test(passKey.value)){
		passwordError.textContent = "valid Password"
		passwordError.classList.add('success')
		InputBox[2].classList.remove('error')
		InputBox[2].classList.add('success')
		isPasskey = true;
	}
	else{
		passwordError.textContent = "Invalid PassWord"
		passwordError.classList.add('error')
		InputBox[2].classList.remove('success')
		InputBox[2].classList.add('error')
	}
}

function parallelCheck(passKey, passkey2){
	if(isPasskey === true && passKey.value === passkey2.value){
		passwordError1.textContent = "Matched"
		passwordError1.classList.add('success')
		InputBox[3].classList.remove('error')
		InputBox[3].classList.add('success')
	}
	else{
		passwordError1.textContent = "Mismatched"
		passwordError1.classList.add('error')
		InputBox[3].classList.remove('success')
		InputBox[3].classList.add('error')
	}
	console.log(isPasskey === true)
	console.log(passKey.value === passkey2.value)
}









/*


 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
	// console.log("form submitted");
	// console.log("parent", uname.parentElement);
	// console.log("next sib", uname.nextElementSibling);
	// console.log("prev sib", uname.previousElementSibling);
	// console.log("children", form.children);
*/
