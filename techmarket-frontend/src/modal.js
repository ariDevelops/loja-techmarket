const modal = document.querySelector('.modal');
const loginPageBtn = document.querySelector('#botaoLoginPage')
const closeLogin = document.querySelector('#closeLogin')
const loginBtn = document.querySelector('#botaoLogin')


loginPageBtn.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('is-active')
})

closeLogin.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.remove('is-active')
})