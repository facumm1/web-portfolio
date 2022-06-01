"use strict";

const headerToggler = document.querySelector(".toggler");
const headerNav = document.querySelector(".nav");
const headerCloser = document.querySelector(".closer");

const navElements = document.querySelectorAll(".nav-list > li");

const cvBtn = document.querySelector(".cv-btn");
const pdfViewer = document.querySelector(".pdf-viewer");

headerCloser.addEventListener(
  "click",
  () => (headerNav.style.top = -150 + "%")
);

headerToggler.addEventListener("click", () => {
  if (pdfViewer.style.display != "block") {
    headerNav.style.top = 0;
  }
});

for (let element of navElements) {
  element.addEventListener("click", () => (headerNav.style.top = -150 + "%"));
}


cvBtn.addEventListener("click", showPdfVisor);

function showPdfVisor(){
  if (pdfViewer.style.display == "block") {
    pdfViewer.style.display = "none";
    cvBtn.innerHTML = "Download CV";
    document.body.style.overflow = "auto";
    return;
  }

  pdfViewer.style.display = "block";
  document.body.style.overflow = "hidden";
  headerToggler.src = "/public/assets/icons/icon-close-light.svg";
  cvBtn.innerHTML = "Close CV";

  headerToggler.addEventListener("click", () => {
    if (pdfViewer.style.display == "block") {
      headerToggler.src = "/public/assets/icons/icon-hamburger.svg";
      pdfViewer.style.display = "none";
      document.body.style.overflow = "auto";
      cvBtn.innerHTML = "Download CV";
      return;
    }
  });
}
