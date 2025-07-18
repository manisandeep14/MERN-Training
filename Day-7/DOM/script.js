// // //PART - 1

// // const h1Ele = document.getElementById('header');
// // console.log(h1Ele)

// // const divEle = document.getElementsByClassName('divClass');
// // console.log(divEle)

// // const pEles = document.getElementsByTagName('p');
// // console.log(pEles)
// // console.log(pEles[0])
// // console.log(pEles[1])

// // const button = document.getElementsByTagName('button')[0];
// // console.log(button)

// // PART - 2

// const h1 = document.querySelector('h1');
// console.log(h1)

// const h1Id = document.querySelector('#header');
// console.log(h1Id)

// const h1Class = document.querySelector('.h1Class');
// console.log(h1Class)

// const span = document.querySelector('span');
// console.log(span)

// const para = document.querySelector('p')
// console.log(para)

// const allPara = document.querySelectorAll('p')
// console.log(allPara)


// Part - 3 - Access the content 

const h1 = document.querySelector('#header');
console.log(h1.textContent)   // Hello World
h1.textContent = "Hii How are you"

// const button = document.querySelector('button');
// button.textContent = "Clicked"

const inputText = document.querySelector('input');
console.log(inputText.value)
inputText.value = "Kushal Deva"

const company = "Google"
h1.innerText = "I am doing good !!"
h1.innerHTML = '<a href="https://www.google.com">company</a>'
h1.innerHTML = `<a href="https://www.google.com" target="_blank">${company}</a>`

// Modify styles

const paraEle = document.querySelector('.para')
paraEle.style.backgroundColor = '#abcabc'
paraEle.style.fontSize = '2rem'
paraEle.style.textAlign = 'center'

// Parent - Child

const list = document.querySelector('.list')
console.log(list)

console.log(list.children)   // Only the HTML Elements
console.log(list.childNodes) // Spaces

console.log(list.parentElement)
console.log(list.parentNode)

// Create New HTML Element

const li = document.createElement('li');
li.textContent = 'Carrot'

list.appendChild(li)

// setTimeout(() => {
//     list.removeChild(li)
// }, 2000)

const listItems = document.querySelectorAll('li');
console.log(listItems)

const listItem1 = listItems[0]

// Attributes -> GET, SET, REMOVE
listItem1.setAttribute('class', 'list-item')
console.log(listItem1.getAttribute('class'))
console.log(listItem1.getAttribute('id'))
setTimeout(() => {
    listItem1.removeAttribute('class')
}, 2000)

// Event Listeners
// click, hover, keydown, keyup

const button = document.querySelector('button')

button.addEventListener('click', btnClick)

function btnClick() {
    button.textContent = 'Clicked'
}

// button.addEventListener('click', () => {
//     button.textContent = 'Clicked'
// })