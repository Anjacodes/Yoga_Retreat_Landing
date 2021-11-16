// Select elements

const hamburgerBtn = document.querySelector('nav > a');
const closeBtn = document.querySelector('.mobileMenu > a');
const mobileMenu = document.querySelector('.mobileMenu');
const body = document.querySelector('body');
const mobMenuLinks = document.querySelectorAll('.mobileMenu > ul > li > a');

// Add Event Listeners

// Hamburger Menu

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  body.style.overflow = 'hidden';
});

// Mobile Menu Close Button

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  body.style.overflow = 'auto';
});

// Mobile Menu Links
mobMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    body.style.overflow = 'auto';
  });
});