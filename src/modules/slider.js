'use strict';

const slider = () => {
  const sliderBlock = document.querySelector('.top-slider'),
    sliderDot = document.querySelector('.slider-dots'),
    slides = document.querySelectorAll('.item'),
    //slides = document.getElementsByClassName('item'),
    //cells = document.querySelectorAll('.table-cell'),
    dots = document.querySelectorAll('.dot'),
    timeInterval = 3000;

  let currentSlide = 0;
  let interval;
  //let dots;

  const createDots = () => {
    slides.forEach(() => {
      const addedDot = document.createElement('li');
      //const dot = document.createElement('li');
      addedDot.classList.add('dot'); //'dot',
      sliderDot.append(addedDot); //
    });
    let dots = document.querySelectorAll('.dot'); //'dot',
    dots[currentSlide].classList.add('dot-active');
  };

  const prevSlide = (elems, index, className) => {
    elems[index].classList.remove(className);
  };

  const nextSlide = (elems, index, className) => {
    elems[index].classList.add(className);
  };

  const autoSlide = () => {
    let dots = document.querySelectorAll('.dot'); ////
    prevSlide(slides, currentSlide, 'slide-active');
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, 'slide-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startSlide = (timer = 3000) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    let dots = document.querySelectorAll('.dot');

    if (!e.target.matches('.dot, .slider-dots')) {
      return;
    }

    prevSlide(slides, currentSlide, 'slide-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if (e.target.matches('.dot')) {
      dots.forEach((elem, index) => {
        if (elem === e.target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, 'slide-active');
    nextSlide(dots, currentSlide, 'dot-active');
  });

  sliderBlock.addEventListener(
    'mouseenter',
    (e) => {
      if (e.target.matches('.dot')) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    'mouseleave',
    (e) => {
      if (e.target.matches('.dot')) {
        startSlide(timeInterval);
      }
    },
    true
  );
  createDots();
  startSlide(timeInterval);
};

export default slider;
