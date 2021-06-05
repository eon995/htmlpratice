"use strict";

// navbar 스크롤시 투명하게 만들어줌
const navbar = document.querySelector('#navbar');
const navbarheight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll",  () => {

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

    Home.style.opacity =1 -(scrollY/Homeheight);

});



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
};

function divisionHeight(height){
    const divisionHome = (scrollY/height);
    divisionHome.toFixed(2);
    const opacityCal = 1-divisionHome;

    return opacityCal;
}
