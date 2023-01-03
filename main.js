// Mobile Menu

const hamburger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('#glyphicon-remove');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu li');

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

// See Program

const seeLess = document.querySelector('#see-less');
const seeMore = document.querySelector('#see-more')
const speakers = document.querySelector('#speakers');
const partners = document.querySelector('#partners');
const footer = document.querySelector('#footer');
const seeDesktop = document.querySelector('#see-program');

function toggleSeeMobile() {
    speakers.classList.toggle('hidden');
    partners.classList.toggle('hidden');
    footer.classList.toggle('hidden');
    seeLess.classList.toggle('hidden');
    seeMore.classList.toggle('hidden');
}

function toggleSeeDesktop() {
    speakers.classList.remove('hidden');
    partners.classList.remove('hidden');
    footer.classList.remove('hidden');
    seeDesktop.classList.add('hidden');
}

seeLess.addEventListener('click', toggleSeeMobile);
seeMore.addEventListener('click', toggleSeeMobile);
seeDesktop.addEventListener('click', toggleSeeDesktop);