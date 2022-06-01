"use strict";

const headerToggler = document.querySelector(".toggler");
const headerNav = document.querySelector(".nav");
const headerCloser = document.querySelector(".closer");

const navElements = document.querySelectorAll(".nav-list > li");

const cvBtn = document.querySelector(".cv-btn");
const pdfViewer = document.querySelector(".pdf-viewer");

headerToggler.addEventListener("click", toggleHeader);
cvBtn.addEventListener("click", showPdfVisor);

for (let element of navElements) {
  element.addEventListener("click", () => (headerNav.style.top = -150 + "%"));
}

function toggleHeader() {
  if (pdfViewer.style.display != "block") {
    headerNav.style.top = 0;
    headerCloser.addEventListener("click", () => headerNav.style.top = -150 + "%");
  }
}

function showPdfVisor() {
  if (pdfViewer.style.display == "block") {
    hidePdfVisor();
    return;
  }

  cvBtn.innerHTML = "Close CV";
  document.body.style.overflow = "hidden";
  headerToggler.src = "./assets/icons/icon-close-light.svg";
  pdfViewer.style.display = "block";

  headerToggler.addEventListener("click", () => {
    hidePdfVisor();
  });
}

function hidePdfVisor() {
  cvBtn.innerHTML = "Download CV";
  document.body.style.overflow = "auto";
  headerToggler.src = "./assets/icons/icon-hamburger.svg";
  pdfViewer.style.display = "none";
}
