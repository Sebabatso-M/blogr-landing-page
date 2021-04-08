const menu_btn = document.querySelector('.header__menu-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const nav_dropdowns = document.querySelectorAll('.navigation__dropdown');

// open/close menu
menu_btn.addEventListener('click', () => {

    header.classList.toggle('open');
    overlay.classList.add('fade-out');
    menu.classList.add('animated');
    body.classList.toggle('no-scroll');
    close_dropdowns();

}, false);

nav_dropdowns.forEach(element => {
    element.addEventListener('click', collapse, false);
})

// open dropdown
function collapse() {

    const parent = this.parentElement;
    const title = this.children[0]
    const arrow = this.children[1].children[1];
    const max_height = parent.scrollHeight + 'px';
    
    close_dropdowns(this);

    // if open
    if (window.getComputedStyle(parent).maxHeight == max_height) {
        decrease_height(parent);
    } else {
        increase_height(parent);
    }
    title.classList.toggle('active')
    arrow.classList.toggle('opened');
}

// increase height of dropdown 
function increase_height(element) {
    element.style.maxHeight = element.scrollHeight + 'px';
}

// decrease height of dropdown 
function decrease_height(element) {
    element.style.maxHeight = '37px';
}

// closes other open dropdowns
// not the current active dropdown
function close_dropdowns(ele = null) {

    nav_dropdowns.forEach(element => {

        if (ele !== element) {
            const parent = element.parentElement;
            const arrow = element.children[1].children[1];

            decrease_height(parent);
            arrow.classList.remove('opened');
        }
    })
}