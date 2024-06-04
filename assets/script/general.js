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