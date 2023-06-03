const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('.m-menu li');

const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden');
};

const modalMenu = () => {
  hamburger.addEventListener('click', toggleMenu);
  closeMenu.addEventListener('click', toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', toggleMenu);
  });
};

export default modalMenu;
