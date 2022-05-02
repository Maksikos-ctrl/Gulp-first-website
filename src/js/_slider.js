"use strict";


// const portSlider = document.querySelector('.portfolio-section__items');

// const portfolioSlider = new Swiper(portSlider, {
//   slidesPerView: 3,
//   spaceBetween: gap,
//   on: {
//     init: function () {
//       const activeSlide = portSlider.querySelector('.swiper-slide-active');

//       const nextActiveSlide = activeSlide.nextElementSibling;

//       const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

//       activeSlide.classList.add('slider-visible');
//       nextActiveSlide.classList.add('slider-visible');
//       nextNextActiveSlide.classList.add('slider-visible');
//     },
//   },
//   navigation: {
//     nextEl: '.portfolio-section__next',
//     prevEl: '.portfolio-section__prev',
//   },
// });

// document.querySelector('.portfolio-section__prev').addEventListener('click', () => {
//   const activeSlide = portSlider.querySelector('.swiper-slide-next');

//   document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
//     el.classList.remove('slider-visible');
//   });

//   if (activeSlide.previousElementSibling) {
//     const nextActiveSlide = activeSlide.previousElementSibling;
//     activeSlide.classList.add('slider-visible');
//     nextActiveSlide.classList.add('slider-visible');
//     activeSlide.nextElementSibling.classList.add('slider-visible');
//   }
// });

// document.querySelector('.portfolio-section__next').addEventListener('click', () => {
//   const activeSlide = portSlider.querySelector('.swiper-slide-active');

//   const nextActiveSlide = activeSlide.nextElementSibling;

//   const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

//   document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
//     el.classList.remove('slider-visible');
//   });

//   activeSlide.classList.add('slider-visible');
//   nextActiveSlide.classList.add('slider-visible');
//   nextNextActiveSlide.classList.add('slider-visible');
// });

// const testimonialsSlider = new Swiper('.testimonials__items', {
//   slidesPerView: 1,
//   spaceBetween: gap,
//   loop: true,
//   navigation: {
//     nextEl: '.testimonials__next',
//     prevEl: '.testimonials__prev',
//   },
// });


// Slider 1, Homepage
let pos = 0;
const slidesToShow = 3,
     slidesToScroll = 20,
     container = document.querySelector('.portfolio-section__items'),
     wrapper = document.querySelector('.swiper-wrapper'),
     slides = document.querySelectorAll('.slide'),
     prev = document.querySelector('.portfolio-section__prev'),
     next = document.querySelector('.portfolio-section__next'),
     slidesCount = slides.length,
     slidesWidth = container.clientWidth / slidesToShow,
     moveToAnotherSlide =  slidesToScroll *  slidesWidth;


slides.forEach(s => {
    s.style.minWidth = `${slidesWidth}px`;
});

next.addEventListener('click', () => {
    const slidesLeft = slidesCount - (Math.abs(pos) + slidesToShow *  slidesWidth) / slidesWidth;

    pos -= slidesLeft >= slidesToScroll ?  moveToAnotherSlide : slidesLeft *  slidesWidth;


    setPosition();
    checkBtns();
});

prev.addEventListener('click', () => {
  const slidesLeft = Math.abs(pos) / slidesWidth;

  pos += slidesLeft >= slidesToScroll ?  moveToAnotherSlide : slidesLeft *  slidesWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
    wrapper.style.transform = `translateX(${pos}px)`;
};

const checkBtns = () => {
    prev.disabled = pos === 0;
    next.disabled = pos <= -(slidesCount - slidesToShow) * slidesWidth;
};



checkBtns();


// const slides = document.querySelectorAll('.slide'),
//       next = document.querySelector('.portfolio-section__next'),
//       prev = document.querySelector('.portfolio-section__prev');


// slides.forEach((s, n) => {
//     let slidesDimentions = s.getBoundingClientRect(),
//         slidesWidth = slidesDimentions.width;

//     next[n].addEventListener('click', () => {
//         s.scrollLeft += slidesWidth;
//     });

//     prev[n].addEventListener('click', () => {
//       s.scrollLeft -= slidesWidth;
//     });
// });












// next.addEventListener('click', () => {
//   console.log('Я живой');
// });

// prev.addEventListener('click', () => {
//   console.log('Я влево');
// });

// let indexOfSlides = 1;


// showSlides(indexOfSlides);


// function showSlides(s) {
//     if (s > slide.length) {
//         indexOfSlides = 1;
//     }

//     if (s < 1) {
//         indexOfSlides = slide.length;
//     }

//     slide.forEach(s => {
//         s.style.display = 'none';
//     });

//     // slide[indexOfSlides - 1].style.display = '';
// }


// function incrementSlides(s) {
//     showSlides(indexOfSlides += s);
// }

// prev.addEventListener('click', () => {
//   incrementSlides(-1);
// });

// next.addEventListener('click', () => {
//   incrementSlides(1);
// });

// console.log("pidor");


