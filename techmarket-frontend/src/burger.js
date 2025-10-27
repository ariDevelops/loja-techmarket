const menu = document.querySelector('#menu');
const burgerMenu = document.getElementById('hamburguer');


burgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('is-active');
})