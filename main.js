let menu = document.querySelector('.menu')
let burguer = document.getElementById('burguer')
let stylesheet = document.getElementById('stylesheet')

burguer.addEventListener('click', () => menu.classList.toggle('is-active'))

if (window.innerWidth >426) {
    stylesheet.setAttribute('href', "css/style1.css")
}