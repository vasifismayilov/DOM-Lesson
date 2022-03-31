// DOM
let val;
// val =document.all
// val = document.all.length
// val = document.all[10]
// val = document.head
// val = document.body
// val = document.anchors
// val = document.URL
// val = document.domain
// val = document.images
// val = document.title
// val = document.forms
// val = document.forms[0].id
// val = document.forms[0].id += 1
// val = document.scripts


// val = document.getElementById('header')
// val.id = 'my-header'
// val.style.color = 'green'
// val.style.backgroundColor = 'yellow'
// val.style.fontWeight = 'bold'
// // val.textContent = 'Herhansi bir basliq
// val.innerText = 'Herhansi bir basliq'
// val.innerHTML = '<i>Basqa bir basliq</i>'
// val = document.querySelector('.card-header')
// val = document.querySelector('ul')
// val = document.querySelector('li:last-child').style.backgroundColor = 'green'
// val = document.querySelector('li:nth-child(2)').style.backgroundColor = 'green'
// val = document.querySelector('li:nth-child(2)').textContent = 'green'

// val = document.getElementsByClassName('list-group-item')

// val = document.getElementsByTagName('a')

// for(let i=0; i<val.length; i++) {
//     val[i].textContent = `${i+1}-ci task`
// }

// val = document.querySelectorAll('li').forEach(el => el.style.backgroundColor='yellow')

// console.log(val)

let list = document.querySelector('.list-group')

// val = list.childNodes[0]
// val = list.childNodes[0].nodeType
// val = list.children[3].children
// val = list.firstChild
// val = list.firstElementChild
// val = list.lastChild
// val = list.lastElementChild

// val = list.firstElementChild.parentElement.parentElement.parentElement.lastElementChild
// val = list.firstElementChild.nextElementSibling.nextElementSibling
// val = list.firstElementChild.nextElementSibling.nextElementSibling
// val = list.firstElementChild.parentElement.previousElementSibling.firstElementChild

// function addLi(text) {
//     const li = document.createElement('li')
//     li.className = 'list-group-item list-group-item-secondary'
//     const textNode = document.createTextNode(text)
//     li.appendChild(textNode)
//     // li.innerHTML = 'Artiq icim doludur<a href="#" class="delete-item float-right"><i class="fas fa-times"></i></a>'
//     const a = document.createElement('a');
//     a.setAttribute('href', '#')
//     a.className = 'delete-item float-right'
//     a.innerHTML = '<i class="fas fa-times"></i>'
//     li.appendChild(a)
//     list.appendChild(li)
// }

// const text = 'aaaa'
// for (let i=0; i<text.length; i++) {
//     addLi(text)
// }

// list.remove()
// list.lastElementChild.previousElementSibling.remove()

let header = document.querySelector('.app-title')

// header.setAttribute('data-val', 'meyve')

// console.log(header.getAttribute('data-val'))
// header.removeAttribute('data-val')

let titleTag = document.createElement('h2')
titleTag.innerText = 'Example Title'
document.body.appendChild(titleTag)

const firstChild = list.firstElementChild

list.replaceChild(titleTag, firstChild)

console.log(list)
// console.log(list.childNodes)
// console.log(header)
console.log(val)