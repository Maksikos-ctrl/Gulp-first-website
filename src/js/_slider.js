"use strict";


//! Window coordinates are great to use with position:fixed, and document coordinates do well with position:absolute.


// ? Пофиксить Слайдер, сделать его draggable
// ? И 1 и 2


// Slider 1, Homepage
const slidesToShow = 5,
     slidesToScroll = 10,
     container = document.querySelector('.portfolio-section__items'),
     wrapper = document.querySelector('.swiper-wrapper'), //!
     slides = document.querySelectorAll('.slide'),
     prev = document.querySelector('.portfolio-section__prev'),
     next = document.querySelector('.portfolio-section__next'),
     slidesCount = slides.length,
     slidesWidth = container.clientWidth / slidesToShow,
     moveToAnotherSlide =  slidesToScroll *  slidesWidth;

let pressed = false,
    pos = 0,
    startX,
    x;

container.addEventListener('mousedown', e => {
  pressed = true;
  startX = e.offsetX;
  container.style.cursor = 'grabbing';
});

container.addEventListener('mouseenter', e => {
  container.style.cursor = 'grab';
});

// container.addEventListener('mouseleave', e => {
//   container.style.cursor = 'default';
// });

container.addEventListener('mouseup', () => {
  container.style.cursor = 'grab';
});

window.addEventListener('mouseup', () => {
  pressed = false;
});

container.addEventListener('mouseup', e => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;

  wrapper.style.left = `${x - startX}px`;

  checkBoundaryEdge();
});

function checkBoundaryEdge() {
  let outer = container.getBoundingClientRect(),
    inner = wrapper.getBoundingClientRect();

  if (parseInt(wrapper.style.left) > 0) {
    wrapper.style.left = '0px';
  } else if (inner.right < outer.right) {
    wrapper.style.left = `-${inner.width - outer.width}`;
  }
}



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


// Slider 2, Homepage  //? Возможно его и не будет

// const sliders = document.querySelectorAll('.swiper-slide'),
// const nextSl = document.querySelector('.testimonials__next'),
//       prevSl = document.querySelector('.testimonials__prev'),
//       dadOfSlides = document.querySelector('.swiper-wrapper'),
//       Container = document.querySelector('.testimonials__items');
      // firstSlide = sliders[0],
      // slideWidth = firstSlide.offSetWidth, // ! These properties provide the size of the area inside the element borders
      // cloneFirstSlide = firstSlide.cloneNode(true),
      // cloneLastSlide =  sliders[sliders.length - 1].cloneNode(true);


// nextSl.addEventListener('click', () => {
//   console.log('Вправо');
// });

// prevSl.addEventListener('click', () => {
//   console.log('Влево');
// });

// slideContaine.addEventListener('click', () => {
//   console.log('');
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


// let indexOfSlides = 0,
//     posX1,
//     posX2,
//     initialPos,
//     finalPos,
//     canISlide = true;

// slideContainer.append(cloneFirstSlide);
// slideContainer.insertAdjacentElement(cloneLastSlide, firstSlide);

// nextSl.addEventListener('click', () => {
//   switchSlides();
//   console.log('Право');
// });
// prevSl.addEventListener('click',() => {
//   switchSlides();
//   console.log('Лево');
// });

// slideContainer.addEventListener('transitioned', () => {
//   console.log('I am working ');
// });

// slideContainer.addEventListener('transitioned', checkIndexOfSLides);

// slideContainer.addEventListener('mousedown', dragBegin);
// slideContainer.addEventListener('touchstart', dragBegin);
// slideContainer.addEventListener('touchmove', dragMove);
// slideContainer.addEventListener('touchend', dragEnd);


// function dragBegin(e) {
//   e.preventDefault();
//   initialPos = slideContainer.offsetLeft;
//   if (e.type == 'touchstart') {
//     posX1 = e.touches[0].clientX;
//   } else {
//     posX1 = e.clientX;

//     document.addEventListener('mouseup', null);
//     document.addEventListener('mousemove', null);
//   }
// }

// function dragMove(e) {
//   if (e.type == 'touchmove') {
//     posX2 = posX1 - e.touches[0].clientX;
//     posX1 = e.touches[0].clientX;
//   } else {
//     posX2 = posX1 - e.clientX;
//     posX1 = e.clientX;
//   }

//   slideContainer.style.left = `${slideContainer.offsetLeft - posX2}px`;
// }


// function dragEnd() {
//   finalPos = slideContainer.offsetLeft;
//   if (finalPos - initialPos < -496) {  // 992 / 2 = 496
//     switchSlides("nextSl", 'dragging');
//   } else if (finalPos - initialPos > 496) {
//     switchSlides("prev", 'dragging');
//   } else {
//     slideContainer.style.left = `${initialPos}px`;
//   }
// }



// function switchSlides(s, n) {
//   slideContainer.classList.add('transition');

//   if (canISlide) {
//     if (!n) {
//       initialPos = slideContainer.offsetLeft;
//     }
//     if (s == "next") {
//       slideContainer.style.left = `${initialPos - slideWidth}px`;
//       indexOfSlides++;

//     } else {
//       slideContainer.style.left = `${initialPos + slideWidth}px`;
//       indexOfSlides--;

//     }

//     canISlide = false;
//   }
//   // s == "nextSl" ? sliders.style.left = `${sliders.offSetLeft - slideWidth}` : sliders.style.left = `${sliders.offSetLeft + slideWidth}`;
// }

// function checkIndexOfSLides() {
//   slideContainer.classList.remove('transition');
//   if (indexOfSlides === -1) {
//     slideContainer.style.left = `-${slideContainer.length * slideWidth}px`;
//     indexOfSlides = slideContainer.length - 1;
//   }

//   if (indexOfSlides == slideContainer.length) {
//     slideContainer.style.left = `-${slideContainer.length * slideWidth}px`;
//     indexOfSlides = 0;
//   }

//   canISlide = true;
// }
































