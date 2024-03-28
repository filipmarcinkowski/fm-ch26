'use strict';

const image = document.querySelector('.hero-img__img');

const resolution = function () {
  image.src = `./images/image-hero-${
    window.innerWidth > 1000 ? 'desktop' : 'mobile'
  }.png`;
};

window.onload = resolution;
window.onresize = resolution;
