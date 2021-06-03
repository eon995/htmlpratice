"use strict";

// navbar 스크롤시 투명하게 만들어줌
const navbar = document.querySelector('#navbar');
const navbarheight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll",  () => {

    console.log(navbarheight);

    if (window.scrollY > navbarheight) {
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
    };

});





