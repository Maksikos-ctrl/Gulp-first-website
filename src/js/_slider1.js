"use strict";

const slidesToShow = 5,
     slidesToScroll = 1,
     container = document.querySelector('.related-projects__items'),
     wrapper = document.querySelector('.swiper-wrapper'), //!
     slides = document.querySelectorAll('.slide'),
     prev = document.querySelector('.related-projects__prev'),
     next = document.querySelector('.related-projects__next'),
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



// Slider

// let offset = 0;
// let slideIndex = 1;

// const slides = document.querySelectorAll('.offer__slide'),
//     slider = document.querySelector('.offer__slider'),
//     prev = document.querySelector('.offer__slider-prev'),
//     next = document.querySelector('.offer__slider-next'),
//     total = document.querySelector('#total'),
//     current = document.querySelector('#current'),
//     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//     width = window.getComputedStyle(slidesWrapper).width,
//     slidesField = document.querySelector('.offer__slider-inner');

// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
//     current.textContent =  `0${slideIndex}`;
// } else {
//     total.textContent = slides.length;
//     current.textContent =  slideIndex;
// }

// slidesField.style.width = 100 * slides.length + '%';
// slidesField.style.display = 'flex';
// slidesField.style.transition = '0.5s all';

// slidesWrapper.style.overflow = 'hidden';

// slides.forEach(slide => {
//     slide.style.width = width;
// });

// slider.style.position = 'relative';

// const indicators = document.createElement('ol'),
//       dots = [];
// indicators.classList.add('carousel-indicators');
// indicators.style.cssText = `
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: 15;
//     display: flex;
//     justify-content: center;
//     margin-right: 15%;
//     margin-left: 15%;
//     list-style: none;
// `; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям
// slider.append(indicators);

// for (let i = 0; i < slides.length; i++) {
//     const dot = document.createElement('li');
//     dot.setAttribute('data-slide-to', i + 1);
//     dot.style.cssText = `
//         box-sizing: content-box;
//         flex: 0 1 auto;
//         width: 30px;
//         height: 6px;
//         margin-right: 3px;
//         margin-left: 3px;
//         cursor: pointer;
//         background-color: #fff;
//         background-clip: padding-box;
//         border-top: 10px solid transparent;
//         border-bottom: 10px solid transparent;
//         opacity: .5;
//         transition: opacity .6s ease;
//     `;
//     if (i == 0) {
//         dot.style.opacity = 1;
//     }
//     indicators.append(dot);
//     dots.push(dot);
// }

// next.addEventListener('click', () => {
//     if (offset == (deleteNotDigits(width) * (slides.length - 1))) {
//         offset = 0;
//     } else {
//         offset += deleteNotDigits(width);
//     }

//     slidesField.style.transform = `translateX(-${offset}px)`;

//     if (slideIndex == slides.length) {
//         slideIndex = 1;
//     } else {
//         slideIndex++;
//     }

//     if (slides.length < 10) {
//         current.textContent =  `0${slideIndex}`;
//     } else {
//         current.textContent =  slideIndex;
//     }

//     dots.forEach(dot => dot.style.opacity = ".5");
//     dots[slideIndex-1].style.opacity = 1;
// });

// prev.addEventListener('click', () => {
//     if (offset == 0) {
//         offset = deleteNotDigits(width) * (slides.length - 1);
//     } else {
//         offset -= deleteNotDigits(width);
//     }

//     slidesField.style.transform = `translateX(-${offset}px)`;

//     if (slideIndex == 1) {
//         slideIndex = slides.length;
//     } else {
//         slideIndex--;
//     }

//     if (slides.length < 10) {
//         current.textContent =  `0${slideIndex}`;
//     } else {
//         current.textContent =  slideIndex;
//     }

//     dots.forEach(dot => dot.style.opacity = ".5");
//     dots[slideIndex-1].style.opacity = 1;
// });

// dots.forEach(dot => {
//     dot.addEventListener('click', (e) => {
//         const slideTo = e.target.getAttribute('data-slide-to');

//         slideIndex = slideTo;
//         offset = deleteNotDigits(width) * (slideTo - 1);

//         slidesField.style.transform = `translateX(-${offset}px)`;

//         if (slides.length < 10) {
//             current.textContent =  `0${slideIndex}`;
//         } else {
//             current.textContent =  slideIndex;
//         }

//         dots.forEach(dot => dot.style.opacity = ".5");
//         dots[slideIndex-1].style.opacity = 1;
//     });
// });

// function deleteNotDigits(str) {
//     return +str.replace(/\D/g, '');
// }

