//  letz create an element H1 as a heading DOM PRACTICE using DOM IN JS

let header = document.createElement('h1');
header.textContent = "DOM PRACTICE";
header.style.textAlign = "center";
header.style.fontFamily = "sans-serif";
header.style.backgroundColor = "lightblue";

//appending the created header to the body(parent)
document.body.append(header);

let message = document.createElement('p');
message.textContent = "Just started practicing DOM Functionalites. Tried to create a header using the dom and now i'm writing a para to append this to the parent element called body."
message.style.fontSize = "26px";
message.style.textAlign = "center"
//append
document.body.append(message);

let subHead1 = document.createElement('h3');
subHead1.textContent = "Let'z create a button and will give functionalities"
subHead1.style.textAlign = "center"
subHead1.style.fontFamily =  "sans-serif";
subHead1.style.backgroundColor = "lightblue";
//append
document.body.appendChild(subHead1);


//accessing the element from the html page

let button = document.querySelector('.batan');
button.style.padding = "10px 20px";
// button.style.backgroundColor = 'lightpink';
button.style.border = '2px solid lightblue';
button.style.borderRadius = '10px';
button.style.display = "block";
button.style.margin = "0 auto";

//Adding a class to interact with css and html elements
button.classList.add('batan')

button.addEventListener('mousedown', ()=>{
  button.textContent = 'DOOMED!!!';
});

button.addEventListener('mouseup', ()=>{
  button.textContent = 'DOM';
});

button.addEventListener('mouseleave', ()=>{
  button.textContent = 'DOM';
});



//creating another elemnt
let message1 = document.createElement('h4');
message1.textContent = " Button created with different styles using different event listeners but you can see it, it is up there due to we access it html. First html elements execute then the script files";
message1.style.fontFamily = 'sans-serif';
message1.style.textAlign = 'center';
//append
document.body.appendChild(message1);
