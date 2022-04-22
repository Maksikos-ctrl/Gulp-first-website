const bodyStyles = window.getComputedStyle(document.body),
    gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));


const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: gap,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
  