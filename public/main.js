const headerToggler = document.querySelector('.toggler');
const headerNav = document.querySelector('.nav');
const headerCloser = document.querySelector('.closer');

headerToggler.addEventListener('click', () => headerNav.style.left = 0);
headerCloser.addEventListener('click', () => headerNav.style.left = 150 + '%');
