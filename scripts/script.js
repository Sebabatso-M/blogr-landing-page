const menu_btn = document.querySelector(".header__menu-btn");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const html = document.querySelector("html");
const header = document.querySelector(".header");
const nav_dropdowns = document.querySelectorAll(".navigation__dropdown");

// open/close menu
menu_btn.addEventListener(
    "click",
    () => {
        header.classList.toggle("--is-open");
        overlay.classList.add("fade-out");
        menu.classList.add("animated");
        html.classList.toggle("no-scroll");
        close_dropdowns();
    },
    false
);

nav_dropdowns.forEach((element) => {
    element.addEventListener("click", collapse, false);
});

// open dropdown
function collapse() {
    const parent = this.parentElement;
    const title = this.children[0];
    const arrow = this.children[1].children[1];
    const max_height = parent.scrollHeight + "px";
    const options = this.nextElementSibling;

    close_dropdowns(this);

    // if open and website is in mobile view
    if (window.getComputedStyle(header).display == "block") {
        if (window.getComputedStyle(parent).maxHeight == max_height) {
            decrease_height(parent);
        } else {
            increase_height(parent);
        }
    } else {
        // on tablet view and above

        options.classList.toggle("open");
        if (!options.classList.contains("open")) {
            options.classList.add("animate");
        } else {
            options.classList.remove("animate");
        }
    }
    title.classList.toggle("active");
    arrow.classList.toggle("opened");
}

// increase height of dropdown
function increase_height(element) {
    element.style.maxHeight = element.scrollHeight + "px";
}

// decrease height of dropdown
function decrease_height(element) {
    element.style.maxHeight = "36.8px";
}

// closes other open dropdowns
// not the current active dropdown
function close_dropdowns(ele = null) {
    nav_dropdowns.forEach((element) => {
        if (ele !== element) {
            const parent = element.parentElement;
            const title = element.children[0];
            const arrow = element.children[1].children[1];
            const options = element.nextElementSibling;

            decrease_height(parent);

            // for tablet view and up
            if (options.classList.contains("open")) {
                options.classList.add("animate");
                options.classList.remove("open");
            } 

            title.classList.remove("active");
            arrow.classList.remove("opened");
        }
    });
}
