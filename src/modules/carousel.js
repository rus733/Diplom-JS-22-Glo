'use strict';

//import Swiper from 'swiper';

const carousel = () => {
  const arrowBlock = document.querySelector('.services-arrow');
  const prevArrow = arrowBlock.querySelector('.arrow-left');
  const nextArrow = arrowBlock.querySelector('.arrow-right');

  prevArrow.classList.add('disabled');

  const swiper = new Swiper('.swiper', {
    //loop: true,
    navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left',
    },
    //slidesPerView: 1,
    //spaceBetween: 10,

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
