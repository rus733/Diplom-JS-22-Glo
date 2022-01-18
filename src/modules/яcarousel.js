const carousel = () => {
  let serviceCarousel = document.getElementsByClassName('services-carousel'),
    arrowLeft = document.querySelector('.arrow-left'),
    arrowRight = document.querySelector('.arrow-right'),
    current = 0;

  // Clear all images
  function reset() {
    for (let i = 0; i < serviceCarousel.length; i++) {
      serviceCarousel[i].style.display = 'none';
    }
  }

  // Initial slide
  function startSlide() {
    reset();
    serviceCarousel[0].style.display = 'block';
  }

  // Show previous
  function slideLeft() {
    reset();
    serviceCarousel[current - 1].style.display = 'block';
    current--;
  }

  // Show next
  function slideRight() {
    reset();
    serviceCarousel[current + 1].style.display = 'block';
    current++;
  }

  // Left arrow click
  arrowLeft.addEventListener('click', function () {
    if (current === 0) {
      current = serviceCarousel.length;
    }
    slideLeft();
  });

  // Right arrow click
  arrowRight.addEventListener('click', function () {
    if (current === serviceCarousel.length - 1) {
      current = -1;
    }
    slideRight();
  });

  startSlide();
};

export default carousel;
