"use strict";

const headerNav = document.querySelector(".nav");
const headerToggler = document.querySelector(".toggler");
const headerCloser = document.querySelector(".closer");

const navElements = document.querySelectorAll(".nav-list > li");

headerToggler.addEventListener("click", toggleHeader);

for (let element of navElements) {
  element.addEventListener("click", () => (headerNav.style.top = -150 + "%"));
}

function toggleHeader() {
    headerNav.style.top = 0;
    headerCloser.addEventListener("click", () => headerNav.style.top = -150 + "%");
}