"use strict"

const headerGroups = document.querySelector('.header__search--groups');
const headerGroupDropdown = document.querySelector('.header__groups--dropdown');

headerGroups.addEventListener("click", () => {
    setTimeout(() => headerGroupDropdown.classList.toggle("active"), 1000);
})



const headerLang = document.querySelector(".header__lang");
const headerLangMenu = document.querySelector(".header__lang--menu");

headerLang.addEventListener("click", () => {
    headerSearchInput.classList.contains("active") ?
    setTimeout(() => headerLangMenu.classList.toggle("active") , 300):
    headerLangMenu.classList.toggle("active");
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



const headerSearchInput = document.querySelector('.header__search--input');
const headerSearchBtn = document.querySelector('.header__search--btn');

function handleHeaderSearchBtn() {
    const viewportWidth = window.innerWidth;

    if(viewportWidth <= 768) {
        headerSearchBtn.type = "button";
    } else {
        headerSearchBtn.type = "submit";
    }
}

document.addEventListener("DOMContentLoaded", handleHeaderSearchBtn)
window.addEventListener("resize", handleHeaderSearchBtn)

headerSearchBtn.addEventListener("click", () => {
    headerLangMenu.classList.contains("active") ?
    setTimeout(() => headerSearchInput.classList.add("active"), 300) :
    headerSearchInput.classList.add("active")

    setTimeout(() => headerSearchBtn.type = "submit" , 300)
})



document.addEventListener("click", (e) => {
    !headerGroups.contains(e.target) && headerGroupDropdown.classList.remove("active");
    !headerLang.contains(e.target) && headerLangMenu.classList.remove("active");
        
    if (!headerSearchBtn.contains(e.target) && !headerSearchInput.contains(e.target)) {
        headerSearchInput.classList.remove("active")
        headerSearchBtn.type = "button"
    }
    
})


const headerSearchSelect = document.getElementById("headerSearchSelect");
const headerSearchSelectedGroup = document.getElementById("headerSearchSelectedGroup");
const headerSearchWelding = document.getElementById("headerSearchWelding");
const headerSearchValve = document.getElementById("headerSearchValve");

headerSearchWelding.addEventListener(() => {
    headerSearchSelect.value = "welding"
})

headerSearchValve.addEventListener(() => {
    headerSearchSelect.value = "valve"
})