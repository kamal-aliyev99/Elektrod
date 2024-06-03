"use strict"

const headerGroups = document.querySelector('.header__search--groups');
const headerGroupDropdown = document.querySelector('.header__groups--dropdown');

headerGroups.addEventListener("click", () => {
    headerGroupDropdown.classList.toggle("active");
})
document.addEventListener("click", (e) => {
    !headerGroups.contains(e.target) && headerGroupDropdown.classList.remove("active");
})