'use strict';

//import Swiper from 'swiper';

const carousel = () => {
  const arrowBlock = document.querySelector('.services-arrow');
  const prevArrow = arrowBlock.querySelector('.arrow-left');
  const nextArrow = arrowBlock.querySelector('.arrow-right'); //swiper-button-disabled
  console.log(arrowBlock);
  console.log(prevArrow);
  console.log(nextArrow);
  prevArrow.classList.add('disabled');

  const swiper = new Swiper('.swiper', {
    //loop: true,
    navigation: {
      nextEl: '.arrow-right', //arrow-left
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

  if (nextArrow.closest('.swiper-button-disabled')) {
    console.log('right');
  } //swiper-button-disabled

  if (prevArrow.closest('.swiper-button-disabled')) {
    console.log('left');
    prevArrow.classList.add('disabled');
  }
};

export default carousel;
