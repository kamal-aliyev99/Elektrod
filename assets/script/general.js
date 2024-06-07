"use strict"

const headerGroups = document.querySelector('.header__search--groups');
const headerGroupDropdown = document.querySelector('.header__groups--dropdown');

headerGroups.addEventListener("click", () => {
    headerGroupDropdown.classList.toggle("active");
})

const headerLang = document.querySelector(".header__lang");
const headerLangMenu = document.querySelector(".header__lang--menu");

headerLang.addEventListener("click", () => {
    headerLangMenu.classList.toggle("active");
})

document.addEventListener("click", (e) => {
    !headerGroups.contains(e.target) && headerGroupDropdown.classList.remove("active");
    !headerLang.contains(e.target) && headerLangMenu.classList.remove("active");;
})

const iconHamburger = document.querySelector(".icon-hamburger");
const header = document.querySelector(".header");

iconHamburger.addEventListener("click", () => {
    iconHamburger.classList.toggle("active");
    header.classList.toggle("active");

})

const navbarProducts = document.querySelector(".navbar__products > a");
const navbarProductsList = document.querySelector(".navbar__products--list");

navbarProducts.addEventListener("click", () => {
    navbarProductsList.classList.toggle("active");
})






