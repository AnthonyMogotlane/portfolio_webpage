const menuNav = document.querySelector('.menu-nav');
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('#navbar');
const navItem = document.querySelectorAll('.nav-item');

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    menuBtn.classList.add('close');
    navbar.classList.add('show');
    menuNav.classList.add('show');
    navItem.forEach(item => item.classList.add('show'));
    //Setting menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    navbar.classList.remove('show');
    menuNav.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));
    //Setting menu state
    showMenu = false;
  }
}