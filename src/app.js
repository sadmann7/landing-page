//* sticky nav-bar
const nav = document.querySelector('.navbar-fixed-top');

function navScroll() {
  nav.classList.toggle('sticky', window.scrollY > 0);
}

window.addEventListener('scroll', navScroll);

//* hamburger-menu
const hamBurger = document.querySelector('.hamburger');
const navList = document.querySelector('.mobile-nav');

function navBurger() {
  hamBurger.classList.toggle('active');
  navList.classList.toggle('show');
}

hamBurger.addEventListener('click', navBurger);
