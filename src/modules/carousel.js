'use strict';

const carousel = () => {
  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left',
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
};

export default carousel;
