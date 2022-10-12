document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.color="green"
})

document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.color="black"
})
let ulList = document.querySelector('ul')
let buttonC = document.querySelector('button')
let inputText = document.querySelector('input')
// read the value from inputext text
// create element .. <li></li>
// add text to it  .. <li>Papaya<li>
// append new element to UlList
// on button click

buttonC.addEventListener('click',function(){
    let text = inputText.value
    let newE = document.createElement('li')
    newE.textContent = text
    ulList.appendChild(newE)
    inputText.value = ""
})



let UlList = document.querySelector('ul')
let buttonA = document.querySelector('button')
let inputText2 =document.querySelector('text')
buttonA.addEventListener('click',function(){
    let text = inputText2.value
    let newE = document.createElement('li')
    newE.textContent = text
    ulList.appendChild(newE)
    inputText.value = ""
})
