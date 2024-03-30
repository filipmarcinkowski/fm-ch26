'use strict';

const image = document.querySelector('.hero-img__img');
const btn = document.querySelector('.menu__open-icon');
const menuMainBox = document.querySelector('.menu-container');
const blur = document.querySelector('.blur');
const dropdownParent = document.querySelectorAll('.menu__dropdown-box');

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

btn.addEventListener('click', showMenu);

const selectMenu = function (el) {
  el.addEventListener('click', showDropdown);
};

const showDropdown = function () {
  const dropdown = this.querySelector('.dropdown-box');
  const arrow = this.querySelector('.icon');
  dropdown.classList.toggle('hidden');
  const isOpen = dropdown.classList.contains('hidden');
  arrow.src = `./images/icon-${isOpen ? 'arrow-down' : 'arrow-up'}.svg`;
};

dropdownParent.forEach(selectMenu);
