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

// 메뉴클릭시 해당 페이지로 이동
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    const scrollTo = document.querySelector(link);

    scrollTo.scrollIntoView({behavior:'smooth'});



});





