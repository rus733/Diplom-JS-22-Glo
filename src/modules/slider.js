'use strict';

const slider = () => {
  const sliderBlock = document.querySelector('.top-slider'),
    sliderDot = document.querySelector('.slider-dots'),
    //slides = document.querySelectorAll('.item'),
    slides = document.getElementsByClassName('item'),
    //cells = document.querySelectorAll('.table-cell'),
    dot = document.querySelectorAll('.dot'),
    timeInterval = 2000;

  let currentSlide = 0;
  let interval;
  //let dots;

  /*
  const createDots = () => {
    slides.forEach(() => {
      const dot = document.createElement('li');
      dot.classList.add('dot'); //'dot',
      sliderDot.append(dot); //
    });
    dots = document.querySelectorAll('.dot'); //'dot',
    dots[currentSlide].classList.add('dot-active');
  };
*/
  const prevSlide = (elems, index, className) => {
    elems[index].classList.remove(className);
  };

  const nextSlide = (elems, index, className) => {
    elems[index].classList.add(className);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'slide-active');
    prevSlide(dot, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, 'slide-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (timer = 3000) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot, .slider-dots')) {
      return;
    }

    prevSlide(slides, currentSlide, 'slide-active');
    prevSlide(dot, currentSlide, 'dot-active');

    if (e.target.matches('.dot')) {
      dot.forEach((elem, index) => {
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
    nextSlide(dot, currentSlide, 'dot-active');
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
  //createDots();
  //autoSlide();

  startSlide(timeInterval);
};

export default slider;
