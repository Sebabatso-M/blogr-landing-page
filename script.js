const menu_btn = document.querySelector('.header__menu-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');

menu_btn.addEventListener('click', ()=>{
    menu_btn.classList.toggle('open');
}, false);