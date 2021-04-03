const menu_btn = document.querySelector('.header__menu-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

const header = document.querySelector('.header');

menu_btn.addEventListener('click', () => {
    header.classList.toggle('open');
    overlay.classList.add('fade-out');
    menu.classList.add('animated');
    body.classList.toggle('no-scroll');
}, false);