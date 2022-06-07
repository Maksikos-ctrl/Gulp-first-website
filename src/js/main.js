import accordion from './modules/accordion';
import slider from './modules/slider';

// const accordion = require('./modules/accordion');





document.addEventListener('DOMContentLoaded', () => {

  accordion('.we-offer__accordion');
  slider({
    containerSelector: '.portfolio-section__items',
    wrapperSelector: '.swiper__wrapper',
    slideSelector: '.slide',
    prevArrow: '.portfolio-section__prev',
    nextArrow: '.portfolio-section__next'
  });
});





