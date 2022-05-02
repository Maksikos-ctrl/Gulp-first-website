"use strict";

// TODO: Реализовать Progress Bar кружочков

// const circle = document.querySelector('.progress');

// const progressAnimation = () => {
//     let percentageProgress = Math.floor(67);

//     let radius = circle.getAttribute('r');
//     console.log(radius);
//     let circleLength = 2 * Math.PI * radius;
//     console.log(circleLength);

//     circle.setAttribute('stroke-dasharray', circleLength);
//     circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
// };

// progressAnimation();


const circles = document.querySelectorAll('.facts-elem__circle');

circles.forEach(c => {

  if (c.dataset.percentage == 'true') {
    // percentageProgress = 50;
    let progress = c.querySelector('.progress'),
      valueBlock = c.querySelector('.facts-elem__value'),
      radius = progress.getAttribute('r'),
      circleLength = 2 * Math.PI * radius,
      full = c.dataset.full,
      value = c.dataset.value,
      percentageProgress = Math.floor(value / full * 100); // Перевод в проценти
      console.log(percentageProgress);

    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  } else {
    // console.log(c.dataset.percentage);
    let progress = c.querySelector('.progress'),
      valueBlock = c.querySelector('.facts-elem__value'),
      radius = progress.getAttribute('r'),
      circleLength = 2 * Math.PI * radius,
      percent = c.dataset.percent,
      percentageProgress = Math.floor(percent);
    valueBlock.textContent = percent + '%';
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }
});


