let ham = document.querySelector('#ham')
let x = document.querySelector('#x')
let menu = document.querySelector('#menu')
let search = document.querySelector('#search')
let searchMenu = document.querySelector('#searchMenu')
let products = document.querySelector('#products')
let back = document.querySelector('#back')
let trending = document.querySelector('#trending')

ham.addEventListener('click',()=>{
    menu.style.display = 'block'
})

x.addEventListener('click',()=>{
    menu.style.display = 'none'
    products.style.display = 'none'
})

searchMenu.addEventListener('click', ()=>{
    products.style.display = 'block'
    menu.style.display = 'none'
})

back.addEventListener('click', ()=>{
    menu.style.display = 'block'
})

search.addEventListener('click', ()=>{
    trending.classList.toggle('hidden')
})

