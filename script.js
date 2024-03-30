'use strict';

const image = document.querySelector('.hero-img__img');
const btn = document.querySelector('.menu__open-icon');
const menuMainBox = document.querySelector('.menu-container');
const blur = document.querySelector('.blur');
const dropdownParent = document.querySelector('.menu-dropdown__name-box');
const dropdown = document.querySelector('.dropdown-box');
const arrow = document.querySelector('.icon');

const resolution = function () {
  image.src = `./images/image-hero-${
    window.innerWidth > 704 ? 'desktop' : 'mobile'
  }.png`;
};

window.onload = resolution;
window.onresize = resolution;

const showMenu = function () {
  const isOpen = menuMainBox.classList.contains('open__menu-main');
  menuMainBox.classList.toggle('open__menu-main');
  blur.classList.toggle('show-blur');
  btn.src = `./images/icon-${isOpen ? 'menu' : 'close-menu'}.svg`;
};

const showDropdownMenu = function (e) {
  const isOpen = dropdown.classList.contains('hidden');
  dropdown.classList.toggle('hidden');
  arrow.src = `./images/icon-${isOpen ? 'arrow-up' : 'arrow-down'}.svg`;
};

btn.addEventListener('click', showMenu);
dropdownParent.addEventListener('click', showDropdownMenu);
