"use strict";

// navbar 스크롤시 투명하게 만들어줌
const navbar = document.querySelector('#navbar');
const navbarheight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll",  () => {

    if (window.scrollY > navbarheight) {
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
    }

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
    navbarMenu.classList.remove('open');
});

// contact me  버튼 누를시 contact 로 이동

const contactMe = document.querySelector('.home_contact');

contactMe.addEventListener('click', (event) => {
   console.log('aaaa');
    scrollIntoView('#contact');
});

//scroll시 fade out 효과 주기
const Home = document.querySelector('#Home');
const Homeheight = Home.getBoundingClientRect().height;
document.addEventListener("scroll",  () => {

    Home.style.opacity =1 - (scrollY/Homeheight);

});

//메뉴 버튼 클릭시 메뉴활성화
const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');


navbarToggleBtn.addEventListener('click',()=>{
    const result = navbarMenu.classList.toggle('open');
    console.log(result);
});



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}


