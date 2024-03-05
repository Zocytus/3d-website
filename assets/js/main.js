/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
        ? header.classList.add("shadow-header")
        : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

let body = document.querySelector("body"),
    lightBox = document.querySelector(".lightBox"),
    img = document.querySelectorAll(".gImg"),
    showImg = lightBox.querySelector(".showImg img"),
    close = lightBox.querySelector(".close");

for (let image of img) {
    image.addEventListener("click", () => {
        showImg.src = image.src;
        lightBox.style.display = "block";
        body.style.overflow = "hidden";
        close.onclick = () => {
            lightBox.style.display = "none";
            body.style.overflow = "visible";
        };
    });
}
